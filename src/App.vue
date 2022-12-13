<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
setup(){
  const store = useStore()
  onBeforeMount(async () => {
   await store.dispatch('fetchUser')
  })
  return{
    user : store.state.user
  }
}
}
</script>

<style>

</style>