<template>
  <div class="row">
<h1>Filters And Mixins</h1>
<p>{{ text | to-lowercase }}</p>

<input type="text" v-model="filterText">
  <ul>
    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
  </ul>

  <mixins></mixins>
  </div>
</template>

<script>
import mixins from './mixins.vue';
export default {
  components: { mixins },
data(){
    return{
        text:'HELLO',
    fruits: ['apple','orange','banana' , 'Guava'],
    filterText:''
    }
},
filters:{
     toUppercase(value){
return value.toUppercase();
     }
},
computed:{
    filteredFruits(){
    return this.fruits.filter((element)=>{
return element.match(this.filterText);

    })
    }
}
}
</script>

<style>

</style>