<template>
  <div class="profile">
    <div class="info-item" v-for="(label, index) in editable_fields" :key="index">
      <div v-if="shouldShow(label)">
        <label class="label">{{ label }}:</label>
        <span v-if=!isEditing class="value">{{ profile[label] }}</span>
        <el-input v-else v-model="editedProfile[label]" class="edit-input" />
      </div>
    </div>
    <div>
      <label class="courses"> courses:</label>
      <el-select v-if="isEditing" v-model="editedProfile.courses" multiple filterable class="edit-input" placeholder="Courses">
            <el-option
              v-for="course in course_list"
              :key="course.id"
              :label="course.name"
              :value="course.id"
            ></el-option>
      </el-select>
      <div v-else>
        <el-tag v-for="(course, index) in profile.courses" :key="index" class="ml-2" type="success">{{course.name}}</el-tag>
      </div>
    </div>
    <div v-if="isEditing" class="save-button">
      <el-button @click="cancelEdit" type="warning">Cancel</el-button>
      <el-button @click="saveEdit" type="primary">Save</el-button>
    </div>
  </div>
</template>

<script>
import profileApi from '../utils/profile';
import courseApi from '../utils/course';

export default {

  created() {
    this.fullfill_profile()
  },
  mounted() {
    const user_id = this.$route.query.user_id;
    if (user_id == 0) {
      this.isEditing = true
    }
    this.profile = profileApi.get_profile_by_id(user_id)
    console.log(user_id, this.profile)
    this.editedProfile = { ...this.profile }
    this.fullfill_profile()
    this.course_list = courseApi.get_course_list()
  },

  data() {
    return {
      isEditing: false,
      editable_fields: ['name', 'uni', 'email'],
      user_id: 0,
      editedProfile: {},
      profile: {},
      course_list:[],
    };
  },

  methods: {
    fullfill_profile() {
      for (let label in this.editedProfile) {
        if (!this.editedProfile.hasOwnProperty(label)) {
          this.editedProfile[label] = ''
        }
        if (!this.profile.hasOwnProperty(label)) {
          this.profile[label] = ''
        }
      }
    },
    shouldShow(label) {
      return !(label === 'id') && !(label == 'courses')
    },
    saveEdit() {
      console.log('Save', this.editedProfile);
      this.profile = this.editedProfile
      profileApi.save_profile(this.editedProfile)
      this.$router.push({path: '/contents'})
    },
    cancelEdit() {
      this.$router.push({path: '/contents'})
    },
  },
};
</script>
  
<style scoped>
.profile {
  max-width: 400px;
  margin: auto;
}

.info-item {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}

.value {
  color: #333;
}

.edit-input {
  width: 200px;
}

.save-button {
  display: flex;
  margin-top: 10px;
}
</style>