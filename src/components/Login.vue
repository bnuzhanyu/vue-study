
<!-- Vue3GoogleLogin https://devbaji.github.io/vue3-google-login/#initialize-the-plugin -->

<template>
    <h1>Sweety Course</h1>
    <GoogleLogin :callback="callback" prompt />
</template>

<script>
import router from '../router'
import loginInfo from '../utils/login';

export default {

    data() {
        return {
        };
    },

    methods: {
        callback(response) {
            loginInfo.store_login_info(response)
            router.push({
                path: '/contents',
            })
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 3em;
    color: #7a3dc9;
}
</style>