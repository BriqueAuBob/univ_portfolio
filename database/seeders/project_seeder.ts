import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Project from '#models/project';
import { writeFileSync } from 'fs';
import { cuid } from '@adonisjs/core/helpers';
import app from '@adonisjs/core/services/app';
import string from '@adonisjs/core/helpers/string';

export default class extends BaseSeeder {
  private async fetchImage(url: string, image: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], image);
    const reader = await file.stream().getReader();
    const { value } = await reader.read();
    const path = 'project_' + cuid() + '.' + file.name.split('.').pop();
    writeFileSync(app.makePath('uploads/' + path), value);
    return path;
  }

  private async format(element: any) {
    switch (element['type']) {
      case 'image':
        const path = await this.fetchImage('http://45.155.169.158' + element['src'], element['src']);
        return '<img class="w-full" src="/uploads/' + path + '" alt="' + element['alt'] + '" />';
      case 'video':
        return '<video src="' + element['src'] + '" controls></video>';
      case 'embed':
        return '<iframe class="w-full min-h-[600px]" src="' + element['src'] + '" frameborder="0" allowfullscreen></iframe>';
      case 'title':
        return '<h1>' + element['content'] + '</h1>';
      case 'text':
        return '<p>' + element['content'] + '</p>';
      case 'code':
        return '<pre><code>' + string.escapeHTML(element['content']) + '</code></pre>';
      default:
        let elements = '';
        if (element?.childrens) {
          for (const child of element['childrens']) {
            elements += await this.format(child);
          }
        }
        return '<div>' + elements + '</div>';
    }
  }

  async run() {
    try {
      const data: any = await (await fetch('http://45.155.169.158/api/projects.json')).json();
      const dataToCreate: any[] = [];
      await Project.query().delete();
      for (const project of data) {
        const foundProjectName = await Project.query().where('name', project.name).first();
        if (foundProjectName) {
          continue;
        }

        const path = await this.fetchImage('http://45.155.169.158/' + project.thumbnail, project.thumbnail);

        const formatted = await Promise.all(project.elements.map(async (element: any) => await this.format(element)));
        dataToCreate.push({
          name: project.name,
          description: project.description,
          content: project.presentation + '\n' + formatted.join('\n'),
          image: path,
          courseId: 1,
        });
      }

      Project.createMany(dataToCreate);
    } catch (error) {
      console.log('Fail to seed projects.');
      console.error(error);
    }
  }
}
