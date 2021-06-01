import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations,
    actions,
    modules: {},
    getters
})
export default store
