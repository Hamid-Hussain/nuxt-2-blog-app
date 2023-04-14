<template>
  <div class="admin-post-page">
    <section class="update-form">
        <admin-post-form  :post="loadedPost" @submit="onSubmitted"/>

    </section>
  </div>
</template>

<script>
import AdminPostForm from '../../../components/Admin/AdminPostForm.vue'
// import axios from '@nuxtjs/axios'
// import axios, * as others from 'axios';
export default {
  components: { AdminPostForm },
    layout: 'admin',
    // data( ) {
    //     return {
    //         loadedPost: { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' }
    //     }
    // },
    asyncData(context) {
        return context.app.$axios.get('https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/posts/'+context.params.postId+'.json').then(res=>{
            
            "https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/"
            // console.log("res",res)
            return {
                loadedPost: { ...res.data, id: context.params.postId}
            }
        }).catch(e=>context.error())
    },
    methods: {
        onSubmitted(editedPost) {
            this.$store.dispatch('editPost',editedPost)
            .then(()=>this.$router.push('/admin'))
            // axios.put('https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/posts/'+this.$route.params.postId+'.json',editedPost).then((res)=> this.$router.push('/admin')).catch((e=>console.log(e)))
        }
    },

}
</script>

<style scoped>.update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }

</style>