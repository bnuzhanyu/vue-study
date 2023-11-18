
<template>
    <div class="reviews">
        <p>search and selections</p>
            <div v-for="item in review_list">
                <Review :review_in_list="true" :review="item"/>
            <br>
        </div>
    </div>
</template>

<script>
import Review from '../components/Review.vue'
export default {

    components: {
        Review
    },

    methods: {

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

    props: {
        review_list: Array
    }
};
</script>