<template>
  <div class="signup-container">
    <div class="signup-iStock">iStock</div>
    <div class="signup-Sign-In">Create account</div>
    <div class="signup-signupform">
      <form>
        <div class="container">
          <label for="name"><b>Name</b></label>
          <input type="text" v-model="name" placeholder="Enter name" name="name" required>            

          <label for="email"><b>Email</b></label>
          <input type="text" v-model="email" placeholder="Enter email" name="email" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" v-model="password" placeholder="Enter password" name="password" required>

          <label for="repsw"><b>Re-enter Password</b></label>
          <input type="password" v-model="repassword" placeholder="Enter password" name="repassword" required>
          <div v-if="!isMatch" class="signup-PasswordMissMatch">password does not match</div>        

          <label for="address"><b>Address</b></label>
          <input type="text" v-model="address" placeholder="Enter address" name="address" required>

          <label for="city"><b>City</b></label>
          <input type="text" v-model="city" placeholder="Enter city" name="city" required>

          <label for="mobile"><b>Mobile</b></label>
          <input type="text" v-model="mobile" placeholder="Enter mobile" name="mobile" required>

          <div class="signup-button">
            <button>Create your iStock Account</button>
          </div>

          <div class="signup-terms">
            <div>
              By continuing you agree to iStock's Condtions
            </div>
            <div>
              of Use and Privacy Notice
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="signup-signin" >
        <div class="signup-Already">Already have an account?</div>

        <router-link to="SignIn">
        <div class="signup-signinbutton">
        <button>Sign in</button>
        </div>
        </router-link>

    </div>


  </div>
</template>

<script>
export default {
    name:"SignUp",
    data () {
    return {
      email:"",
      name:"",
      address:"",
      mobile:"",
      password:"",
      repassword:"",
      city:"",
      isMatch:true,
    }
  },
  watch: {
      email: function () {
        if(this.email.length > 2) {
          this.email_exist = true;
        }
      },
      repassword: function () {
        if(this.password==this.repassword){
          this.isMatch=true;
        }
        else{
          this.isMatch=false;
        }
      },
  }

}
</script>

<style scoped>
  .signup-container{
    display: flex;
    flex-direction: column;
    background-color: #F7F7FF;
    height: 100%;
    justify-content: center;
    padding: 50px;

  }
  .signup-iStock{
    text-align: center;
    color:#FE5F55;
    font-weight: bold;
    font-size: 36px;
    font-family: Agency FB;
  }
  .signup-Sign-In{
    text-align: center;
    color:#495867;
    font-weight: bold;
    font-size: 48px;
  }
  .signup-signupform{
    border-style: solid;
    border-width: 2px;
    border-color: #d4d4d8;
    padding: 50px 100px;
    width: 50%;
    margin: auto;
  }
  input[type=text],input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: white;
}

.signup-button{
  background-color:#495867;
  color: white;
  padding:10px 30px;
  text-align: center;
  font-size: 16px;
  width: 60%;
  margin: auto;
}
.signup-terms{
  color:#BEB9BC;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.signup-signinbutton{
  background-color:#495867;
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 10px 30px;
  margin: auto;

}
.signup-signin{
    display: flex;
    margin: auto;
}
.signup-Already{
    color:#BEB9BC;
    text-align: center;
    margin: 20px;

}
.signup-PasswordMissMatch{
  color: red;
  font-size: 10px;
}

</style>