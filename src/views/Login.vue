<template>
    <div class="container">
  <form ref="form">
  <!-- Heading -->
  <div class="form-outline mb-4">
    <h1 class="text-center">Login</h1>
  </div>
    <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control"  v-model="login_form.email"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" v-model="login_form.password"/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-start">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col text-end">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4 form-control"  @click="login">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <router-link to="/register">Register</router-link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
</template>

<script>
import {  ref,onBeforeMount , computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup(){
    const login_form = ref({})
    const store = useStore();
    const router = useRouter();
    const token = computed(() => store.state.token)
    
    const login = () =>{

      console.log(login_form);
       store.dispatch('login' , login_form.value)
    }
    
    onBeforeMount(() => {
      if(localStorage.getItem('token')){
        router.push('/')
      }
    })
    return{
        login_form,
        login,
        token
    }
  },
 data(){
    return{
        email : "",
        password: ""
    }
 },
}
</script>

<style>
.container{
    margin-top: 7%;
    max-width: 500px;
}
</style>