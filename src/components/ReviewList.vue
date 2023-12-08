
<template>
    <div class="reviews">
        <div v-for="item in review_list">
            <br>
            <Review :review_in_list=true :review="item"/>
        </div>
    </div>
</template>

<script>
import Review from '../components/Review.vue'
export default {

    components: {
        Review
    },

    props: {
        review_list: Array,
        total: {
            type: Number,
            default: 10
        },
    }
};
</script>