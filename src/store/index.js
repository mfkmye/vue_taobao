import Vue from 'vue'
import Vuex from 'vuex'
import UserInfo from './userInfo/UserInfo'
import ScreenOuterTbh from './screenOuterTbh/ScreenOuterTbh'
import HotsaleData from './hotsaleData/HotsaleData'
import axios from '../../api/MyAxios'

Vue.use(Vuex);
var store = new Vuex.Store({
  state() {
    return {
      noNetwork: false // 无网络版本，所有数据请求访问本地文件
    }
  },
  mutations: {},
  actions: {},
  modules: {
    UserInfo,
    ScreenOuterTbh,
    HotsaleData
  }
});
store.axios = axios;
export default store;