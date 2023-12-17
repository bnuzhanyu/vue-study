/** api for course */

const courseApi = {

    all_course_list: null, 

    _create_course(id, name, professor, likes) {
        return {
            id: id,
            name: name,
            professor: professor,
            likes: likes,
        }
    },

    get_course_list() {
        if (this.all_course_list == null) {
           this.all_course_list = [
                this._create_course(1, 'Course1', 'prof1', 10),
                this._create_course(2, 'Course2', 'prof2', 20),
                this._create_course(3, 'Course3', 'prof2', 21),
            ]
        }
        return this.all_course_list
    },

    get_course_names() {
        let names = this.get_course_list().map(
            p => p.name
        )
        console.log('courses:', names)
        return names

        for (let c in this.get_course_list()) {
            names.push(c.name)
        }
        return names
    },

    add_course(course) {
        course.likes = 0
        this.get_course_list().push(course)
    },

    delete_course(id) {
        if (this.all_course_list == null) {
            return;
        }
        this.all_course_list = this.all_course_list.filter(
            (course) => course.id != id
        )
    },

    get_recommend_course(uni) {
        [
            this.get_course_list()[2],
            this.get_course_list()[1],
        ]
    },
};
  
export default courseApi;