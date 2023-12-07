<template>
    <div class="profile">
      <div class="info-item">
        <label>name:</label>
        <span>{{ profile.name }}</span>
      </div>
  
      <div class="info-item">
        <label>ID:</label>
        <span>{{ profile.studentId }}</span>
      </div>
  
      <div class="info-item">
        <label>UNI:</label>
        <span>{{ uni }}</span>
      </div>
  
      <div class="info-item">
        <label>Email:</label>
        <span>{{ profile.email }}</span>
      </div>
  
      <div class="info-item">
        <label>Major:</label>
        <span>{{ profile.major }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
        const uni = this.$route.query.uni;
        this.uni = uni
    },
    data() {
      return {
        profile: {
          name: 'Your Name',
          studentId: 'Your Student ID',
          email: 'your.email@example.com',
          major: 'Your Major'
        },
        uni: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .info-item {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  label {
    font-weight: bold;
  }
  </style>