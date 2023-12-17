<template>
  <div id="app">
    <Banner />
    <div class="container">
      <el-tabs class="tabs" tab-position=left type=border-card stretch=true style="width: 100%;">
        <el-tab-pane label="Review">
          <ReviewList />
        </el-tab-pane>
        <el-tab-pane label="Recommend">
          <Recommend />
        </el-tab-pane>
        <el-tab-pane v-if="is_admin" label="Courses">
          <CourseListAdmin />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import ReviewList from '../components/ReviewList.vue'
import Banner from '../components/Banner.vue'
import Recommend from '../components/Recommend.vue'
import CourseListAdmin from '../components/CourseListAdmin.vue'
import loginInfo from '../utils/login'

export default {

  components: {
    ReviewList,
    Recommend,
    Banner,
    CourseListAdmin,
  },

  data() {
    return {
      is_admin: loginInfo.is_admin(),
      activeTab: 'review',
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
    },
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

.container {
  display: flex;
  width: 100%;
  background-color: black;
}

.tabs el-tab-pane {
  display: flex;
  width: 100%;
}
</style>