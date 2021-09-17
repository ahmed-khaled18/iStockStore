<template>
  <div class="signin-container">
    <div class="signin-iStock">iStock</div>
    <div class="signin-Sign-In">Sign-In</div>
    <div class="signin-signinform">
      <div class="container">
        <label for="email"><b>Email</b></label>
        <input type="text" v-model="email" placeholder="Enter email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="password" placeholder="Enter password" name="password" required>

        <div class="signin-button">
          <button @click="Login()">Sign-In</button>
        </div>

        <div class="signin-terms">
          <div>
            By continuing you agree to iStock's Condtions
          </div>
          <div>
            of Use and Privacy Notice
          </div>
        </div>
      </div>
    </div>

    <div class="signin-terms">New to iStock ?</div>
    <router-link to="SignUp">
    <div class="signin-button">
      <button>Create your iStock Account</button>
    </div>
    </router-link>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"SignIn",
    data () {
      return {
        email:"",
        password:"",
      }
    },

    methods:{
    async Login(){
      await axios.post('http://localhost:3000/api/user/login', {
        email: this.email,
        password: this.password,
      }).then((response) => {
        if (response.status == 200) {
          this.$router.replace('/');
        }
      }, (error) => {
          if (error.response.status == 400) {

          }
      });
    },
  }
}
</script>

<style scoped>
  .signin-container{
    display: flex;
    flex-direction: column;
    background-color: #F7F7FF;
    height: 100%;
    justify-content: center;
    padding: 50px;

  }
  .signin-iStock{
    text-align: center;
    color:#FE5F55;
    font-weight: bold;
    font-size: 40px;
    font-family: Agency FB;
  }
  .signin-Sign-In{
    text-align: center;
    color:#495867;
    font-weight: bold;
    font-size: 48px;
  }
  .signin-signinform{
    border-style: solid;
    border-width: 2px;
    border-color: #d4d4d8;
    padding: 50px 100px;
    width: 50%;
    margin: auto;
  }
  input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: white;
}
input[type=password]{
  width: 100%;
  padding: 12px 20px;
  margin-bottom:60px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: white;

}
.signin-button{
  background-color:#495867;
  color: white;
  text-align: center;
  font-size: 22px;
  width: 25%;
  margin: auto;
  padding:10px 20px ;
}
.signin-terms{
  color:#BEB9BC;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>