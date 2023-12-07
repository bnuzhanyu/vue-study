
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
        decodeJwtResponse(credential) {
            const jwt = credential.split('.')[1];
            const decodedPayload = atob(jwt);
            const jwtData = JSON.parse(decodedPayload);
            return jwtData;
        },

        store_login_info(response) {
            const userinfo = this.decodeJwtResponse(response.credential)
            console.log('google profile', userinfo)
            const googleUsername = userinfo.email.split('@')[0]
            const avatar = userinfo.picture
            console.log('google name', googleUsername)
            const user_info = {name: googleUsername, avatar: avatar}
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
    <GoogleLogin :callback="callback" prompt/>
</template>

<style scoped>
h1 {
  font-size: 3em;
  color: #7a3dc9;
}
</style>