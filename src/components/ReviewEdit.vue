<template>
  <div>
    <h1>{{ isNewReview ? 'New Review' : 'Edit Review' }}</h1>

    <form @submit.prevent="submit_review">
      <div>
        <label for="title">Title:</label>
        <input v-model="review.title" type="text" id="title" required>
      </div>

      <div>
        <label for="course">Course:</label>
        <input v-model="review.course" type="text" id="course" required>
      </div>

      <div>
        <label for="content">Review Content:</label>
        <textarea v-model="review.content" id="content" rows="5" required></textarea>
      </div>

      <button type="submit">{{ isNewReview ? 'Create Review' : 'Update Review' }}</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      review: {
        title: '',
        course: '',
        content: ''
      },
      isNewReview: true
    };
  },
  mounted() {
    if (this.$route.query.review_id) {
      this.isNewReview = false;
      //TODO: fetch
      // this.fetchReviewInfo(this.$route.params.review_id);
    } else {
      this.isNewReview = true
      this.review = {
        title: '',
        course: '',
        content: ''
      }
    }
  },
  methods: {
    //   fetchReviewInfo(reviewId) {
    //     setTimeout(() => {
    //       const reviewData = {
    //         title: 'Existing Review Title',
    //         course: 'Existing Review Course',
    //         content: 'Existing Review Content'
    //       };
    //       this.review = { ...reviewData };
    //     }, 500);
    //   },
    submit_review() {
      console.log(this.isNewReview ? 'Creating Review:' : 'Updating Review:', this.review);

      //TODO: toast for success
      const success = true
      if (success) {
        ElNotification({
          message: 'save post success',
          type: 'success',
        })
        this.$router.push('/contents')
      }
    }
  }
};
</script>
  
<style scoped>
h1 {
  text-align: center;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>