<template>
  <div class="single-post-page">
    <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
            <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
            <div class="post-detail">Written by ={{ loadedPost.author }}</div>
        </div>
        <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
        <p class="post-content">Let me know what you think about the post, send a mail to <a href="mailto:feedback@myawesome-demaincom">feedback@my-awesome-domain.com</a></p>
    </section>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
export default {


asyncData(context){
  console.log(context.params.id,'fdsjlfkdjflk', 'https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/posts/'+context.params.id+'.json')
  return this.$axios.$get('https://nuxt-blog-app-49f74-default-rtdb.firebaseio.com/posts/'+context.params.id+'.json').then((res)=>{
    console.log("ressss",res);
    return {loadedPost: res.data}
  }).catch(e=>context.error(e))
  // setTimeout(() => {
  //   callback(null, {
  //     loadedPost: {
  //           author: 'Hamid',
  //           title: 'First Post (ID: '+context.route.params.id+')',
  //           content: 'Super amazing, thank for that!',
  //           thumbnailLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU',
  //           updatedDate: new Date(),
  //           content: 'Some dummy text which is definitely not the preview text!'

  //        },
  //   });
  // }, 1000);
}
}
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>