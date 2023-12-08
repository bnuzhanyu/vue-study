<template>
  <div v-if="review_in_list">
    <div class="header">
      <div class="author">
        <router-link :to="{ path: '/profile', query: { user_id: review.user.id } }" class="router-link">
          <el-avatar>{{ review.user.name }}</el-avatar>
        </router-link>
      </div>
      <div class="likes">likes:{{ review.likes }}</div>
      <div class="timestamp">{{review.create_time}}</div>
    </div>
    <div class="contentbox">
      <router-link :to="{ path: '/review', query: { review_id: review.id } }" class="router-link">
        <div class="content">{{ review.content }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },

    props: {
        review: {
            type: Object,
        },
        review_in_list: {
            default: true
        }
    }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 243, 68);
  font-size: 18px;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.author {
  color: #333;
  margin-left: 10px
}

.timestamp {
  color: #888;
}

.likes {
  color: #e44d26;
}

.contentbox {
  background-color: #f0c598;
}
.content {
  margin-left:10px;
  font-size: 18px;
  color: #555;
}
</style>