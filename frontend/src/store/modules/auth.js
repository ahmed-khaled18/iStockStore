import axios from "axios";
import router from '../../router';

const state = {
    user: null,
    posts: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
};

const actions = {
    async Register({ dispatch }, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },

    //   async LogIn({commit}, user) {
    //     await axios.post("login", user);
    //     await commit("setUser", user.get("username"));
    //   },

    async LogIn({ commit }, myemail, pass) {
        await axios.post('http://localhost:3000/api/user/login', {
            email: myemail,
            password: pass,
        }).then((response) => {
            if (response.status == 200) {
                commit("setUser", myemail);
                router.replace('/');
            }
        }, (error) => {
            if (error.response.status == 400) {

            }
        });
    },


    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};

const mutations = {
    setUser(state, username) {
        state.user = username;
    },

    logout(state, user) {
        state.user = user;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};