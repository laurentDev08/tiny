<template>
  <div class="contain">      
    <div v-for="post in posts" :key="post.id">      
        <Card :one="post" />
    </div>          
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import axios from "axios"
  export default {
  components: { Card},
    data(){
      return{
          posts: ""          
      }
    },
    mounted(){
      axios.get("https://manga-zr2e.onrender.com/manga")
      .then(res=>this.posts = res.data)  
    },   
  }
</script>

<style scoped>
  .contain{
    width: 70%;
    margin: auto;  
  }

</style>  