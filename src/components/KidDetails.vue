<template>
    <div class="details">
        <div class="p-12">
            <img :src="kid.picture" alt="" class="pic">
        </div>
        <div class="p-12">
            <h1 class="text-blue-400 text-5xl font-extrabold capitalize mb-7">{{ kid.title }}</h1>
            <p class="text-lg font-bold text-gray-400 mb-2 border-b-2 pb-2">Description :</p>
            <p class="text-xl font-bold text-gray-400 text-justify pt-2">{{ kid.description }}</p>
            <p class="text-gray-400 pt-2 font-bold">
                Retrouve un épisodes <a :href="kid.url" class="text-blue-300">ici</a></p>
        </div>        
    </div>
    
</template>

<script setup>
import { ref, onMounted} from "vue"
import { useRoute } from "vue-router";

const kid = ref({});
const route = useRoute();

onMounted(async()=>{
    const res = await fetch(`https://manga-zr2e.onrender.com/manga/${route.params.id}`);
    const data = await res.json();
    kid.value = data;
})

</script>

<style scoped>
    img{
        width: 450px;
        height: 550px;
        object-fit: cover;
    }
</style>