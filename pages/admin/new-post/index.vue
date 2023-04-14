<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
          <admin-post-form @submit="onSubmitted"/>
        </section> 
    </div>
</template>

<script>
import AdminPostForm from '../../../components/Admin/AdminPostForm.vue'
// import axios from '@nuxtjs/axios'
// import axios, * as others from 'axios';
export default {
     components: {
          AdminPostForm
     },
     layout: 'admin',
    data() {
        return {
         loadedPost: {
            author: 'Hamid',
            title: 'My awesome post',
            content: 'Super amazing, thank for that!',
            thumbnailLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' 
         }   
         
        }
    },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch('addPost',postData).then(()=>{console.log('postadded')
        this.$router.push("/admin")})
            // axios.post('https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/posts.json',{...postData, updatedDate: new Date()}).then((result)=>this.$router.push('/admin')).catch((e)=>console.log(e))
        }
    }

}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>