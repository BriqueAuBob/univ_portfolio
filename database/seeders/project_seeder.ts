import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Project from '#models/project';
import { writeFileSync, readdirSync, unlinkSync } from 'fs';
import { cuid } from '@adonisjs/core/helpers';
import app from '@adonisjs/core/services/app';
import string from '@adonisjs/core/helpers/string';
import { parse } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateTime } from 'luxon';

export default class extends BaseSeeder {
  private async fetchImage(
    url: string,
    image: string,
    pathHandler: (file: File, image: string) => string = (file) => 'project_' + cuid() + '.' + file.name.split('.').pop()
  ) {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], image);
    const reader = await file.stream().getReader();
    const { value } = await reader.read();
    const path = pathHandler(file, image);
    writeFileSync(app.makePath('../uploads/' + path), value);
    return path;
  }

  private async format(element: any, project: any) {
    switch (element['type']) {
      case 'image':
        const path = await this.fetchImage(
          'http://45.155.169.158' + element['src'],
          element['src'],
          (file) => 'proof_' + project.url.replaceAll('/', '-') + '_' + cuid() + '.' + file.name.split('.').pop()
        );
        return '<img class="w-full rounded-xl shadow-sm" src="/uploads/' + path + '" alt="' + element['alt'] + '" />';
      case 'video':
        element['src'] = element['src'].replace('http://45.155.169.158', 'https://mmi22d01.mmi-troyes.fr');
        return '<video src="' + element['src'] + '" controls></video>';
      case 'embed':
        element['src'] = element['src'].replace('http://45.155.169.158', 'https://mmi22d01.mmi-troyes.fr');
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
            elements += await this.format(child, project);
          }
        }
        return '<div>' + elements + '</div>';
    }
  }

  async run() {
    // try {
    //   const data: any = await (await fetch('http://45.155.169.158/api/projects.json')).json();
    //   const dataToCreate: any[] = [];
    //   // Delete all projects
    //   // await Project.query().delete();
    //   // Empty the uploads folder
    //   const uploads = app.makePath('../uploads');
    //   const files = readdirSync(uploads);
    //   for (const file of files) {
    //     unlinkSync(uploads + '/' + file);
    //   }
    //   // Create projects
    //   for (const project of data) {
    //     const foundProjectName = await Project.query().where('name', project.name).first();
    //     if (foundProjectName) {
    //       continue;
    //     }
    //     const parsedDate = parse(project.date, 'MMMM yyyy', new Date(), { locale: fr });
    //     const luxonDate = DateTime.fromJSDate(parsedDate);
    //     const formatted = await Promise.all(project.elements.map(async (element: any) => await this.format(element, project)));
    //     dataToCreate.push({
    //       name: project.name,
    //       description: project.description,
    //       content: project.presentation + '\n' + formatted.join('\n'),
    //       image: await this.fetchImage('http://45.155.169.158/' + project.thumbnail, project.thumbnail),
    //       courseId: 1,
    //       createdAt: luxonDate,
    //     });
    //   }
    //   Project.createMany(dataToCreate);
    // } catch (error) {
    //   console.log('Fail to seed projects.');
    //   console.error(error);
    // }
  }
}
