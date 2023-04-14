<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate(data) {
        console.log(data)
        return true
    },
    layout: 'users'
}
</script>

<style>

</style>