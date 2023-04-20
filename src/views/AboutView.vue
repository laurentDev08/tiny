<template>
  <div class="text-center">
    <h1>page abouts</h1>
    <input type="file" @change="selectFile" accept="image/*">
    <button @click="charge" class="border-2 border-gray-400 rounded-md px-2">Upload</button>
  </div>
</template>

<script >
import axios from "axios"
  export default {
    data(){
      return{
        collect: null
      }
    },
    methods:{
      selectFile(e){
          this.collect = e.target.files[0]
      },
      charge() {
        const fd = new FormData();
        fd.append("picture", this.collect, this.collect.name)
        axios.post("https://manga-zr2e.onrender.com/manga", fd)
          .then(res => {
            console.log(res);
          })
      }
    },
  }
</script>

<style scoped>

</style>