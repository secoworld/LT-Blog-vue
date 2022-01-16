// import Vue from 'vue'
import Vuex from 'vuex';
import admin from './moudles/admin'

// Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        admin,
    }
})

export default store