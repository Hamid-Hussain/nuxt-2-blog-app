<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import PostPreview from '../../components/Posts/PostPreview.vue';
import PostList from '../../components/Posts/PostList.vue';
import { set } from 'vue';
export default {
  middleware: 'log',
  components: {
    Header,
    PostPreview,
    PostList
  },
  //  data () {
  //   return {
  //     loadedPosts: [
  //         { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' },
  //         { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' }
  //       ]
  //   }
  // },
  // fetch(context){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //         { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' },
  //         { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' }
  //       ]
  //       })
  //     }, 1000);
  //   }).then(data =>{
  //     context.store.commit('setPosts', data.loadedPosts)
  //   }).catch(e => {
  //     context.console.error();
  //   })
  // },
  computed:{
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },

}
</script>

<style>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>c