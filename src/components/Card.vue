<template>
    <div >        
        <div class="transit">
            <router-link :to="`/KidDetails/${one.id}`">
                <img :src="one.picture" alt="" class="rounded-t-md h-72 object-cover">
            </router-link>                        
            <h3 class="text-center capitalize font-extrabold text-blue-400 truncate p-3 ">{{ one.title }}</h3>            
        </div> 
    </div>
</template>

<script>
    export default {
       props:["one"]
    }
</script>

<style scoped>
    
</style>