<template>
    <div class="header">
      <div class="banner">
          <p>Sweety Course</p>
      </div>
      <!-- avatar in up right -->
      <div class="user-info" @click="navigateToProfile">
          <el-avatar :size="45" :src=login_user.avatar></el-avatar>
          <!-- <div class="name">{{ login_user.name.split('@')[0] }}</div> -->
      </div>
      <el-button type="primary" @click="edit_profile">Edit</el-button>
      <el-button type="danger" @click="logout">Logout</el-button>
    </div>
</template>

<script>
export default {
  created() {

  },

  data() {
      return {
          login_user: JSON.parse(localStorage.getItem('user_login_info')),
      };
  },

  methods: {

      logout() {
        localStorage.removeItem('user_login_info')
        this.$router.push({ path: '/login' })
      },

      edit_profile(e) {
        this.$router.push({ path: '/profile' , query: { user_id: 1, editing: true}});
      },

      navigateToProfile() {
        this.$router.push({ path: '/profile' , query: { user_id: 1}});
      }
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
}

.header {
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: cadetblue;
}
.banner {
  width: 80%;
  font-size: 2em;
  text-align: center;
}

.user-info {
  display: flex;
  align-items: center; 
  margin-right: 20px;
}

.user-info .name {
  margin-left: 20px;
  margin-right: 10px;
}

</style>