<template>
  <div class="home  mt-2">
    <table class="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in comments" :key="row.id">
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="signout">Sign out</button>
</template>

<script>
import { useStore } from 'vuex'
import  axios  from 'axios'
import { onBeforeMount , ref } from 'vue';

export default {
  name: 'Home',
  setup(){
    const store = useStore();
    const comments = ref({})
    const signout = () => {
         store.dispatch('logout')
    }
    const getComments = async () => {
     const res = await axios.get('comments')
     comments.value = res.data
    } 


    onBeforeMount(() => {
      getComments()
    })
    return{
      signout,
      comments 
    }
  }
}
</script>
