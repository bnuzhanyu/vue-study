
<!-- Vue3GoogleLogin https://devbaji.github.io/vue3-google-login/#initialize-the-plugin -->
<script>

import router from '../router'
import avataPath from '../assets/homepage.jpeg'

export default {

    data() {
        return {
            user: {
                name: 'Natalie',
                avatar: avataPath
            },
            activeTab: 'review', 
        };
    },

    methods: {
        store_login_info(response) {
            //TODO: parse google account
            const user_info = {name: 'Natalie', avatar: avataPath}
            console.log('store', JSON.stringify(user_info))
            localStorage.setItem('user_login_info', JSON.stringify(user_info))
        },

        callback (response) {
            this.store_login_info(response)
            router.push({ 
                path:'/contents', 
            })
        }
    }
};
    
</script>

<template>
    <h1>Sweety Course</h1>
    <GoogleLogin :callback="callback" prompt auto-login/>
</template>

<style scoped>
h1 {
  font-size: 3em;
  color: #7a3dc9;
}
</style>