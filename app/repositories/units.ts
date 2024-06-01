import Unit from '#models/unit';

export default class UnitRepository {
  public async all(loadRelations = true) {
    return Unit.query()
      .orderBy('id', 'asc')
      .if(loadRelations, (query) => {
        query.preload('courses', (coursesQuery) => {
          coursesQuery.preload('projects', (projectsQuery) => {
            projectsQuery.preload('customTexts');
            projectsQuery.orderBy('createdAt', 'asc');
          });
        });
      })
      .exec();
  }

  public async find(id: number) {
    return Unit.findOrFail(id);
  }

  public async create(data: any) {
    return Unit.create(data);
  }

  public async update(unit: Unit | number, data: any) {
    unit = typeof unit === 'number' ? await this.find(unit) : unit;
    unit.merge(data);
    await unit.save();
    return unit;
  }

  public async delete(unit: Unit) {
    await unit.delete();
  }
}
