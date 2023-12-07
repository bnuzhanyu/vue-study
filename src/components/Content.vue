<template>
  <div id="app">
    <div class="header">
      <div class="banner">
          <p>Sweety Course</p>
      </div>
      <!-- avatar in up right -->
      <div class="user-info" @click="navigateToProfile">
          <el-avatar :size="45" :src=login_user.avatar></el-avatar>
          <div class="name">{{ login_user.name }}</div>
      </div>
    </div>

    <div class="container">
      <el-tabs class="tabs" tab-position=left type=border-card stretch=true style="width: 100%;">
          <el-tab-pane label="Review">
            <!--selctions for semester-->
            <div>
              <el-select v-model="review_search_condition.semester_value" filterable>
                <el-option v-for="item in semester_options" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
              <el-button type="primary" @click="review_search">Search</el-button>
            </div>
            <ReviewList :review_list="review_list"></ReviewList>
            <el-pagination background layout="prev, pager, next" :total="review_page_info.total" @current-change="review_page_change"/>
          </el-tab-pane>
          <el-tab-pane label="Recommend">
            <p>recommend showed here</p>
          </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import ReviewList from '../components/ReviewList.vue'
export default {
  created() {

  },

  data() {
      return {
          activeTab: 'review', 
          login_user: JSON.parse(localStorage.getItem('user_login_info')),
          review_list: [
              this.create_review('Abby', 'review1', 'Spring 2024', '2023-11-05 13:34:00', 87),
              this.create_review('Bob', 'review2', 'Autumn 2024', '2023-11-06 13:34:00', 99),
              this.create_review('Cindy', 'review3', 'Spring 2024', '2023-11-07 13:34:00', 222),
              this.create_review('David', 'review4', 'Autumn 2024', '2023-11-08 13:34:00', 23),
          ],
          review_search_condition: {
            semester_value: 'semester',
          },
          semester_options: [
            {value: 'All', label: 'All'},
            {value: 'Spring2024', label: 'Spring 2024'},
            {value: 'Autumn2024', label: 'Autumn 2024'},
          ],
          review_page_info: { 
            page: 1,
            total: 1000,
            page_size: 10,
          },
      };
  },

  components: {
      ReviewList
  },

  methods: {
      selectTab(tab) {
          this.activeTab = tab;
      },

      review_search(e) {
        console.log(e)
        console.log(this.review_search_condition)
      },

      review_page_change(page) {
        this.review_page_info.page = page
        //TODO: search page
      },

      create_review(username, content, semester, create_time, likes) {
          return {
              user: {name: username},
              content: content,
              semester: semester,
              create_time: create_time,
              likes: likes,
          }
      },

      navigateToProfile() {
        this.$router.push({ path: '/profile' , query: { uni: 'natalie'}});
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
}

.user-info .name {
margin-left: 20px;
margin-right: 10px;
}

.container {
display: flex;
width: 100%;
background-color: black;
}

.content {
width: 100%;
}

.tabs el-tab-pane {
display: flex;
width: 100%;
}

.sidebar {
display: flex;
width: 15%;
background-color: black;
}

.nav {
flex: 1;
margin-bottom: 20px;
}

.nav div {
cursor: pointer;
color: white;
padding: 10px;
transition: background-color 0.3s ease;
}

.nav div.active {
font-weight: bold;
background-color: #333;
}
.nav div:hover {
background-color: #555;
}

.main-content {
width: 85%;
}
</style>