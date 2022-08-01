<template>
  <div class="hello">
    <div class="ss" v-for="post in posts" :key="post.id">
    
    <h1>{{post.title}}</h1>
    <p>
     {{post.body}} 
    </p>
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['posts'],
  mounted(){
    console.log(this.posts);
  }
}
</script>
