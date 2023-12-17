<template>
  <div>
    <el-button type="primary" @click="addCourseDialogVisible = true">Add Course</el-button>
    <ul>
      <li v-for="(course, index) in courseList" :key="index" class="course-item">
        <span class="course-name">{{ course.name }}</span>
        <span class="professor-name"> - {{ course.professor }}</span>
        <el-button type="danger" class="course-delete-button" @click="deleteCourse(course)"> Delete</el-button>
      </li>
    </ul>

    <!-- Add Course Dialog -->
    <el-dialog v-model="addCourseDialogVisible" title="Add Course" @close="resetAddCourseForm">
      <el-form :model="addCourseForm" label-width="80px">
        <el-form-item label="Course" required>
          <el-input v-model="addCourseForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Professor" required>
          <el-input v-model="addCourseForm.professor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveCourse">Save</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
  
<script>

import courseApi from '../utils/course';

export default {

  data() {
    return {
      courseList: courseApi.get_course_list(),
      addCourseDialogVisible: false,
      addCourseForm: {
        name: '',
        professor: '',
      },
    };
  },

  methods: {
    resetAddCourseForm() {
      this.addCourseDialogVisible = false;
      this.addCourseForm = {
        name: '',
        professor: '',
      };
    },
    saveCourse() {
      if (this.addCourseForm.name && this.addCourseForm.professor) {
        //TODO: remote query
        this.courseList.push({
          id: this.courseList.length,
          name: this.addCourseForm.name,
          professor: this.addCourseForm.professor,
        });
        ElNotification({
          message: 'add course success',
          type: 'success',
        })
        this.resetAddCourseForm();
      } else {
        ElNotification({
          message: 'course should have name and professor',
          type: 'error',
        })
      }
    },

    deleteCourse(course) {
      ElMessageBox.confirm('Are you sure you want to delete this course?', 'Warning', {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          // User clicked "Delete"
          console.log("delete course", course.id);
          courseApi.delete_course(course.id)
          this.courseList = courseApi.get_course_list();
          ElNotification({
            message: 'delete course success',
            type: 'success',
          })
        })
        .catch(() => {
          // User clicked "Cancel" or closed the dialog
        });
    },
  },
};
</script>
  
<style scoped>
.course-item {
  margin-bottom: 10px;
}

.course-name {
  font-weight: bold;
}

.professor-name {
  color: #666;
}

.course-delete-button {
  margin-left: 10px;
}
</style>