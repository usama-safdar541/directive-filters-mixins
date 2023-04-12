import Vue from "vue";
import App from "./App.vue";
import filters from './components/filters.vue';
import mixins from './components/mixins.vue';
Vue.component('mixins', mixins);
Vue.component('filters', filters);
Vue.directive("highlights", {
  //bind hook gives us acces to element binding and cirtual node
  bind(el, binding, vnode) {
    el.style.backgroundColor = "Yellow";
    // 2nd method
    el.style.backgroundColor = binding.value;
    // third
    // if (binding.arg == "background") {
    //   el.style.backgroundColor = binding.value;
    // } else {
    //   el.style.color = binding.value;
    // }

    // forth method
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

Vue.filter('to-lowercase',function(value){
return value.toLowerCase();
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
