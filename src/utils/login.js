
const loginInfo = {

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
        //TODO: interact with server and judge admin
        localStorage.setItem('user_login_info', JSON.stringify(user_info))
    },

    is_admin() {
        return true 
    },

    get_login_info() {
        return JSON.parse(localStorage.getItem('user_login_info'))
    },

    remove_login_info() {
        localStorage.removeItem('user_login_info')
    },
};


export default loginInfo;