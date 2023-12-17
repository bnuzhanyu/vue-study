import loginInfo from './login'

const profileApi = {

    profile: null,
   
    get_login_profile() {
        if (this.profile == null) {
            let googleInfo = loginInfo.get_login_info();
            //TODO: request remote to create or get profile, fill id/uni etc.
            this.profile = {
                'name': googleInfo.name,
                'avatar': googleInfo.avatar
            }
        }
        return this.profile
    },

    get_profile_by_id(id) {
        if (id == 0) {
            return this.get_login_profile()
        } else {
            return {
                name: 'author' + id,
                courses: [{id: 1, name: 'Course1'}, {id: 3, name: 'Course3'}]
            }
        }
    },

    save_profile(profile) {
        this.profile = profile
    },
};


export default profileApi;