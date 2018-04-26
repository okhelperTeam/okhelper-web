// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import '@/assets/css/resetBrowser.css'
import {defaultImg,toTime,formateData} from './components/filters/filter'

Vue.config.productionTip = false;

//注册filter
Vue.filter("defaultImg",defaultImg);
Vue.filter("toTime",toTime);
Vue.filter("formateData",formateData);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


//查询数组某元素下标
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
//根据元素下标删除元素
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
