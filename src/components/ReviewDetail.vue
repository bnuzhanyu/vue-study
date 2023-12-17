<template>
  <div class="review-detail">
    <el-card>
      <div class="review-content">
        <div class="author-info">
          <el-avatar size="large">{{ author.name }}</el-avatar>
          <span class="author-name">{{ author.name }}</span>
        </div>
        <p>{{ reviewDetail.content }}</p>
      </div>

      <div class="review-actions">
        <ReviewAction :review="reviewDetail" />
      </div>

      <div class="like-reply-info">

      </div>

      <!-- Comment Section -->
      <div>
        <el-card v-for="(reply, index) in replies" :key="index">
          <div class="reply-header">
            <el-avatar size="small">{{ reply.author }}</el-avatar>
            <span class="author-name">{{ reply.author }}</span>
            <span class="reply-time">{{ reply.time }}</span>
          </div>
          <p>{{ reply.content }}</p>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import ReviewAction from '../components/ReviewAction.vue'
import reviewApi from '../utils/review.js'

export default {
  components: {
    ReviewAction
  },

  created() {
    const review_id = this.$route.query.id
    console.log("review id", review_id);
    this.reviewDetail = reviewApi.get_review_detail(review_id)
    console.log("review detail", this.reviewDetail);
    this.replies = reviewApi.get_review_replies(review_id)
    this.author = this.reviewDetail.user
  },

  data() {
    return {
      reviewDetail: {},
      replies: [],
      author: {}
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.review-detail {
  margin: 20px;
}

.review-content {
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-name {
  margin-left: 10px;
}

.review-actions {
  margin-bottom: 10px;
}

.like-reply-info {
  color: #999;
}

.reply-header {
  display: flex;
  align-items: center;
}

.reply-time {
  margin-left: 10px;
  color: #999;
}
</style>