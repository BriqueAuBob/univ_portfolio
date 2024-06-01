import Project from '#models/project';
import { DateTime } from 'luxon';

export default class ProjectsRepository {
  public async all() {
    return await Project.all();
  }

  public async show(id: number) {
    return Project.query().where('id', id).preload('course').preload('customTexts').firstOrFail();
  }

  public async update(id: number, data: any) {
    const project = await Project.findOrFail(id);
    project.merge(data);
    if (data.createdAt) {
      project.createdAt = DateTime.fromJSDate(data.createdAt);
    }
    await project.save();
    if (data.customTexts) {
      const customTexts = data.customTexts.map((customText: any) => {
        customText.projectId = project.id;
        return customText;
      });
      console.log(customTexts);
      await project.related('customTexts').updateOrCreateMany(customTexts, ['projectId', 'unitId']);
    }
  }

  public async create(data: any) {
    if (data.createdAt) {
      data.createdAt = DateTime.fromJSDate(data.createdAt);
    }
    const project = await Project.create(data);
    console.log(data);
    if (data.customTexts) {
      const customTexts = data.customTexts.map((customText: any) => {
        customText.projectId = project.id;
        return customText;
      });
      await project.related('customTexts').createMany(customTexts);
    }
  }
}
