import axios from "axios";
import router from '../../router';

const state = {
    user: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
};

const actions = {


    //   async LogIn({commit}, user) {
    //     await axios.post("login", user);
    //     await commit("setUser", user.get("username"));
    //   },

    async LogIn({ commit }, user) {
        await axios.post('http://localhost:3000/api/user/login', {
            email: user.email,
            password: user.password,
        }).then((response) => {
            if (response.status == 200) {
                commit("setUser", user.email);
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