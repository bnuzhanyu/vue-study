<template>
    <div class="profile">
      <div class="info-item" v-for="(index, label) in profile" :key="index">
        <div v-if="shouldShow(label)">
            <label class="label">{{ label }}:</label>
            <span v-if=!isEditing class="value">{{ profile[label] }}</span>
            <el-input v-else v-model="editedProfile[label]" class="edit-input" />
        </div>
      </div>
      <el-button v-if="isEditing" @click="saveEdit" type="primary" class="save-button">Save</el-button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        isEditing: Boolean
    },
    mounted() {
        const uni = this.$route.query.uni;
        this.profile.uni = uni
        console.log(uni, this.profile)
        this.editedProfile = { ...this.profile }
    },

    data() {
      return {
        uni: '',
        editedProfile: { ...this.profile },
        editable: {
            id: false
        },
        profile: {
          id: 1,
          name: 'Name',
          uni: this.uni,
          studentId: 'ID',
          email: 'Email',
          major: 'Major',
        },
      };
    },
    methods: {
      shouldShow(label) {
        return !(label === 'id')
      },
      saveEdit() {
        console.log('Save', this.editedProfile);
        this.editedProfile = { ...this.profile };
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
    margin-top: 10px;
  }
  </style>