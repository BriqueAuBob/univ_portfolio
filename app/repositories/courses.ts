import Course from "#models/course";

export default class CoursesRepository {
    public async all() {
      return await Course.all();
    }
  
    public async show(id: number) {
      return Course.findOrFail(id);
    }
  
    public async update(id: number, data: any) {
      const course = await Course.findOrFail(id);
      course.merge(data);
      await course.save();
    }
  
    public async create(data: any) {
      await Course.create(data);
    }
  }
  