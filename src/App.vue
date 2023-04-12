<template>
  <div class="row">
    <h1>Custom Directives and Hooks</h1>
    <p>bind hook is used in the P tag</p>
    <!-- first methiod of binding custom directive -->
    <p v-highlight>First Method</p>
    <!-- second method of binding custom directive -->
    <p v-highlight="'red'">Second Method</p>
    <!--third method of binding custom directive (Arguments passing) -->
    <p v-highlight:background="'blue'">Second Method</p>

    <!-- fourth method with modifiers in custom directives -->
    <p v-highlights:background.delayed="'red'">Second Method</p>
    <!-- local directive -->
    <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">Color THis Too
    </p>
<filters></filters>
  </div>
</template>

<script>
import filters from './components/filters.vue';
export default {
  components: { filters },
  directives: {
    //local directive name
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        //function for blinking effects
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);

          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
}
</script>