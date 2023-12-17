<template>
  <div class="header">
    <div class="banner">
      <p>Sweety Course</p>
    </div>
    <el-dropdown @command="handleDropdownCommand">
      <span class="user-info" slot="dropdown">
        <el-avatar class="avatar" :size="45" :src="login_user.avatar"></el-avatar>
        <!-- <div class="name">{{ login_user.name.split('@')[0] }}</div> -->
      </span>
      <template #dropdown>
        <el-dropdown-menu class="dropdown-menu">
          <el-dropdown-item command="edit_profile">Edit</el-dropdown-item>
          <el-dropdown-item command="logout">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>

import loginInfo from '../utils/login'

export default {
  created() {

  },

  data() {
    return {
      login_user: loginInfo.get_login_info()
    };
  },

  methods: {
    logout() {
      loginInfo.remove_login_info()
      this.$router.push({ path: '/login' })
    },

    edit_profile(e) {
      this.$router.push({ path: '/profile', query: { user_id: 0} });
    },

    // navigateToProfile() {
    //   this.$router.push({ path: '/profile' , query: { user_id: 1}});
    // },

    handleDropdownCommand(command) {
      if (command === 'edit_profile') {
        this.edit_profile();
      } else if (command === 'logout') {
        this.logout();
      }
    },
  },
};
</script>

<style scoped>
.header {
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: cadetblue;
  text-align: center;
}

.banner {
  width: 100%;
  font-size: 2em;
  text-align: center;
}

.user-info {
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
}

.dropdown-menu {
  width: 100px;
}

:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
</style>