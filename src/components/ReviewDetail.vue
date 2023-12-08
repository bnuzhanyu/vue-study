<template>
  <div class="review-detail">
    <div class="author-info">
      <!-- <img :src="author.avatar" alt="Author Avatar" class="avatar" /> -->
      <el-avatar>{{ author.name }}</el-avatar>
      <span class="author-name">{{ author.name }}</span>
    </div>
    
    <div class="review-content">
      <p>{{ reviewDetail.content }}</p>
    </div>

    <div class="metadata">
      <span class="publish-time">{{ reviewDetail.publishTime }}</span>
      <span class="likes">{{ reviewDetail.likes }} Likes</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        reviewDetail: {
            type: Object,
            required: true,
        },
        author: {
            type: Object,
            required: true,
        },
    },

    created() {
        const review_id = this.$route.query.review_id;
        console.log("review id" , review_id);
        this.review_id = review_id
        //TODO: get author and review detail
        this.reviewDetail = {
            publishTime: '2023-11-30',
            content: 'content' + review_id,
            likes: 10 
        }
        this.author = {
            name: 'author' + review_id,
        }
    },
    data() {
        return {
            review_id: 1,
            reviewDetail: {
            },
            author: {
            }
        }
    }

};
</script>
  
<style scoped>
.review-detail {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.author-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-name {
  font-weight: bold;
}

.review-content {
  margin-bottom: 15px;
}

.metadata {
  font-size: 0.8em;
  color: #888;
}

.publish-time {
  margin-right: 10px;
}
</style>