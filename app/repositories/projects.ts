import Project from '#models/project';
import { DateTime } from 'luxon';

export default class ProjectsRepository {
  public async all() {
    return await Project.all();
  }

  public async show(id: number) {
    return Project.query().where('id', id).preload('course').firstOrFail();
  }

  public async update(id: number, data: any) {
    const project = await Project.findOrFail(id);
    project.merge(data);
    if (data.createdAt) {
      project.createdAt = DateTime.fromJSDate(data.createdAt);
    }
    await project.save();
  }

  public async create(data: any) {
    console.log(data);
    if (data.createdAt) {
      data.createdAt = DateTime.fromJSDate(data.createdAt);
      console.log(data.createdAt);
    }
    await Project.create(data);
  }
}
