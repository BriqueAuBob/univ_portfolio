import Project from '#models/project'

export default class ProjectsRepository {
  public async all() {
    return Project.all()
  }

  public async show(id: number) {
    return Project.findOrFail(id)
  }
}
