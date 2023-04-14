<template>
  <div class="admin-page">
    <section class="new-post">
        <AppButton   @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
        <h1 >Existing Posts</h1>
        <post-list isAdmin :posts="$store.getters.loadedPosts "/>
    </section>
  </div>
</template>

<script>
import PostList from '../../components/Posts/PostList.vue'
import AppButton from '../../components/UI/AppButton.vue';
export default {
    components: {
    PostList,
    AppButton
},data() {
    return {
        loadedPosts: [
          { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' },
          { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' }
        ]
    }
},
layout: 'admin',

}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>