<template>
  <HelloWorld :posts="posts" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import getPosts from './components/composables/getPosts';
export default {
  name: 'App',
  components: {
    HelloWorld
  },

  setup(){
    const {posts, error, load} = getPosts();
    load();
    console.log(posts);

    return {posts, error, load};

  }
}
</script>

<style>

</style>
