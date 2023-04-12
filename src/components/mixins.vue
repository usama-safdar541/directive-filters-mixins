<template>
    <div>
    <input type="text" v-model="filterName">
    <ul>
        <li v-for="names in filteredName">{{ names }}</li>
    </ul>
    </div>
</template>

<script>

export default {
     data(){
        return{
        names:['Usama', ' Ahsan', 'Fahad' , 'Hamid', 'Mughees', 'Raza' , 'Arbaz'],
        filterName:''
    }
     }   ,

computed:{
filteredName(){

    return this.names.filter((element)=>{
return element.match(this.filterName);

})
}
}

    }

</script>
