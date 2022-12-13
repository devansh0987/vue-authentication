<template>
    <div class="container">
  <form ref="form">
  <!-- Heading -->
  <div class="form-outline mb-4">
    <h1 class="text-center">Register</h1>
  </div>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" v-model="register_form.email"/>
    <label class="form-label" for="form2Example1" >Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" v-model="register_form.password"/>
    <label class="form-label" for="form2Example2">Create Password</label>
  </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4 form-control"  @click="register">Submit</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
    <p>or register with:</p>
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
import {  ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(){
    const register_form = ref({})
    const store = useStore();
    
    const register = () =>{
       store.dispatch('register' , register_form.value)
    }

    return{
      register_form,
      register
    }
  },
 data(){
    return{
        email : "",
        password: ""
    }
 },
 methods:{
    submit(){
     console.log("clicked");
    }
 }
}
</script>

<style>
.container{
    margin-top: 7%;
    max-width: 500px;
}
</style>