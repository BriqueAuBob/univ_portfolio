import Course from '#models/course';

export default class CoursesRepository {
  public async all() {
    return await Course.all();
  }

  public async allWithUnits() {
    return await Course.query().preload('units').exec();
  }

  public async show(id: number) {
    return Course.findOrFail(id);
  }

  public async update(id: number, data: any) {
    const course = await Course.findOrFail(id);
    course.merge(data);
    await course.save();
    if (data.units) {
      await course.related('units').sync(data.units);
    }
  }

  public async create(data: any) {
    const course = await Course.create(data);
    data.units?.forEach(async (unitId: number) => {
      await course.related('units').attach([unitId]);
    });
    return course;
  }

  public async delete(id: number) {
    const course = await this.show(id);
    await course.delete();
  }
}
