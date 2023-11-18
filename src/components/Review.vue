<template>
  <div class="header">
    <div class="author">
      <el-avatar>{{review.user.name}}</el-avatar>
    </div>
    <div class="likes">likes:{{ review.likes }}</div>
    <div class="timestamp">{{review.create_time}}</div>
  </div>
  <div class="contentbox">
    <div class="content">{{ review.content }}</div>
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