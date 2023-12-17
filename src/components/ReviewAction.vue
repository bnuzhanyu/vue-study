<template>
  <div class="review-actions">
    <el-statistic :value="review.likes">
      <template #prefix>
        <el-icon style="vertical-align: -0.125em" @click="likeReview(review)">
          <StarFilled :color="calcColor(review)" />
        </el-icon>
      </template>
    </el-statistic>
    <el-statistic :value="review.comment_num" class="comment" @click="toggleCommentBox">
      <template #prefix>
        <el-icon style="vertical-align: -0.125em" color="#b7b7b7">
           <Comment />
        </el-icon>
      </template>
    </el-statistic>

  </div>
  <div v-if="showCommentBox" class="comment-box" >
      <el-input v-model="commentText" placeholder="Enter your comment" />
      <el-button type="primary" @click="submitComment">Submit</el-button>
  </div>
</template>

<script>
import { StarFilled, Star, Comment} from "@element-plus/icons-vue";
import reviewApi from "../utils/review";

export default {
  components: {
    StarFilled,
    Star,
    Comment,
  },

  props: {
    review: Object,
  },

  data() {
    return {
      showCommentBox: false,
      commentText: '',
    }
  },

  methods: {
    likeReview(review) {
      //TODO: to server
      if (!review.liked) {
        console.log("like review:", review.id);
        review.likes = review.likes + 1;
        review.liked = true;
      } else {
        review.likes = review.likes - 1;
        review.liked = false;
      }
    },

    calcColor(review) {
      if (review.liked) {
        return "#f2b50e";
      } else {
        return "#b7b7b7";
      }
    },

    toggleCommentBox() {
      this.showCommentBox = !this.showCommentBox;
    },

    submitComment() {
      //TODO: get user id
      
      reviewApi.add_review_comment(this.review.id, this.commentText)
      this.commentText = '';
      // Reset the comment text and hide the comment box after submission
      this.showCommentBox = false;
    },

  },
};
</script>

<style scoped>
.review-actions {
  display: flex;
  align-items: center;
}

.comment {
  margin-left: 0.5em;
}
</style>
