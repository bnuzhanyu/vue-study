<template>
  <div class="selector-container">
    <div
      class="selector-item"
      v-for="(options_name, index) in review_search_condition"
      :key="index"
    >
      <el-select
        v-model="review_search_selected[options_name]"
        :placeholder="options_name"
        filterable
        clearable
      >
        <el-option
          v-for="item in review_search_options[options_name]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-button type="primary" @click="review_search">Search</el-button>
    <el-button type="primary" @click="post_new_review">New Review</el-button>
  </div>

  <div class="reviews">
    <el-card v-for="review in review_list" :key="review.id" class="review-card">
      <div class="header">
        <div class="author">
          <router-link
            :to="{ path: '/profile', query: { user_id: review.user.id } }"
            class="router-link"
          >
            <el-avatar>{{ review.user.name }}</el-avatar>
          </router-link>
        </div>
        <span>{{ review.create_time }}</span>
      </div>

      <router-link
        :to="{ name: 'review-detail', query: { id: review.id } }"
        class="router-link"
      >
        <div class="content">{{ review.content }}</div>
      </router-link>

      <div class="review-footer">
        <ReviewAction :review="review" />
      </div>
    </el-card>
  </div>

  <el-pagination
    background
    layout="prev, pager, next"
    :total="review_page_info.total"
    @current-change="review_page_change"
  />
</template>

<script>
import ReviewAction from "../components/ReviewAction.vue";
import { StarFilled, Star } from "@element-plus/icons-vue";
import reviewApi from "../utils/review.js";

export default {
  components: {
    ReviewAction,
    StarFilled,
    Star,
  },

  data() {
    return {
      review_list: reviewApi.get_review_list(),
      review_search_condition: [
        "course_name",
        "course_number",
        "department",
        "instructor_name",
        "modes_of_instruction",
        "term",
        "year",
      ],
      review_search_selected: {},
      review_search_options: {
        course_name: [
          { value: "course1", label: "course1" },
          { value: "course2", label: "course2" },
        ],
        course_number: [
          { value: "CS50", label: "CS50" },
          { value: "AA10", label: "AA10" },
        ],
        department: [
          { value: "d1", label: "d1" },
          { value: "d2", label: "d2" },
        ],
        instructor_name: [
          { value: "instructor1", label: "instructor1" },
          { value: "instructor2", label: "instructor2" },
        ],
        instructor_name: [
          { value: "instructor1", label: "instructor1" },
          { value: "instructor2", label: "instructor2" },
        ],
        term: [
          { value: "term1", label: "term1" },
          { value: "term2", label: "term2" },
        ],
        year: [
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
        ],
        modes_of_instruction: [
          { value: "mode1", label: "mode2" },
          { value: "mode2", label: "mode2" },
        ],
      },
      review_page_info: {
        page: 1,
        total: 30,
        page_size: 10,
      },
    };
  },

  methods: {
    review_search(e) {
      console.log(e);
      console.log(this.review_search_condition);
      //TODO: search for review_search_selected of page 1
    },

    review_page_change(page) {
      this.review_page_info.page = page;
      //TODO: search page
    },

    post_new_review() {
      this.$router.push({ path: "/reviewedit" });
    },
  },
};
</script>

<style>
.selector-container {
  display: flex;
  flex: 2;
}

.selector-item {
  margin-right: 10px;
  /* 调整选项之间的间距 */
}

.review-card {
  margin-top: 10px;
}

.review-footer {
  margin-top: 10px;
  color: #909399;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.content {
  margin-left: 10px;
  font-size: 18px;
  color: #555;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
