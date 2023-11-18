<template>
    <div id="app">
      <div class="header">
        <div class="banner">
            <p>Sweety Course</p>
        </div>
        <!-- avatar in up right -->
        <div class="user-info">
            <el-avatar :size="50" :src=login_user.avatar></el-avatar>
            <div class="name">{{ login_user.name }}</div>
        </div>
      </div>
  
      <div class="container">
        <div class="sidebar">
          <div class="nav">
            <div @click="selectTab('review')" :class="{ 'active': activeTab === 'review' }">Review</div>
            <div @click="selectTab('recommend')" :class="{ 'active': activeTab === 'recommend' }">Recommend</div>
          </div>
        </div>
  
        <div class="content">
          <div v-if="activeTab === 'review'">

            <p>search and selections</p>
            <div v-for="item in review_list">
              <Review :review="item"/>
              <br>
            </div>
          </div>
  
          <div v-else-if="activeTab === 'recommend'">
            <p>recommend showed here</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import Review from '../components/Review.vue'
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
            ]
        };
    },

    components: {
        Review
    },

    methods: {
        selectTab(tab) {
            this.activeTab = tab;
        },
        create_review(username, content, semester, create_time, likes) {
            return {
                'user': {'name': username},
                'content': content,
                'semester': semester,
                'create_time': create_time,
                'likes': likes,
            }
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
}

.content {
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