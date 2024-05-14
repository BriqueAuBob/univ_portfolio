import Project from '#models/project';

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
    await project.save();
  }

  public async create(data: any) {
    await Project.create(data);
  }
}
