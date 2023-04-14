<template>
    <div>
      <input type="text"  v-model="userId">
      <button @click="onLoadUser">Load User</button>
      <nuxt-child />
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage',
    data() {
          return {
              userId: ''
          }
      },
      methods: {
          onLoadUser() {
              this.$router.push('/users/'+this.userId)
          }
      },
      layout(context) {
        return 'users'
      }
  }
  </script>
  