import { createStore } from 'vuex'
import router from "../router"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from 'firebase/auth'

export default createStore({
  state: {
    user : null,
    token:null
  },
  getters: {
  },
  mutations: {
    SET_USER (state , user){
      state.user = user
    },
    SET_TOKEN (state , token){
      console.log(token);
      state.token = token
    },
    CLEAR_USER (state , user){
      state.user = null
      state.token = null
    },
  },
  actions: {
    async login({  commit } , details){
      const {email , password} = details
      try{
        const res = await signInWithEmailAndPassword(auth , email , password)
        commit('SET_TOKEN', res._tokenResponse.idToken)
        localStorage.setItem('token',res._tokenResponse.idToken)
      }catch(error){
        switch(error.code){
          case 'auth/user-not-found':
            alert("User not found")
          break
          case 'authwrong-password':
            alert("Wrong Password")
          break
        default:
          console.log(error);
          alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async register({  commit } , details){
      const {email , password} = details
      try{
        await createUserWithEmailAndPassword(auth , email , password)
      }catch(error){
        switch(error.code){
          case 'auth/email-already-in-use':
            alert("Email already in use")
          break
          case 'auth/invalid-email':
            alert("Invalid Email")
          break
          case 'auth/weak-password':
            alert("Weak password")
          break
        default:
          alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async logout({  commit }){
     await signOut(auth)
     localStorage.removeItem('token')
     commit('CLEAR_USER')
     router.push('/login')
    },
    fetchUser({  commit }){
      auth.onAuthStateChanged(async user => {
        if(user == null){
          commit('CLEAR_USER')
        }else{
          commit('SET_USER', user)
          if(router.isReady() && router.currentRoute.value.path === '/login'){
            router.push('/')
          }
        }

      })
    }
  }
})
