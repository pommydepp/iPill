<template>
    <div>
        <el-container style="margin: 100px 35% 100px 35%;">
                  
                    <el-card class="box-card">
                        <div style="width: 100%; height: 30px; background-color: dodgerblue; text-align:center; padding-top: 10px; color: white; font-weight: bold; font-size: 18px;">Sign In</div>
                        <h4 style="text-align: center; margin-top: 60px; font-size: 16px;">Sign in with your email</h4>
                        <el-input placeholder="Email" v-model="input" style="margin-top: 20px;"></el-input>
                        <el-input placeholder="Password" v-model="input" style="margin-top: 20px;"></el-input>
                        <el-button round style="margin: 30px 30% 30px 35%">Sign in</el-button>
                        <h4>__________________  Or  __________________</h4>
                        <div @click="fbSignIn" style="margin:0 12% 0 12%;">
                            <img src="http://werkenindeoffshore.nl/wp-content/uploads/2017/10/facebook-login.png" alt="" width="250" @click="fbSignIn">
                        </div>
                    </el-card>

        </el-container>
        

    </div>
</template>

<script>
    import {dbAuth,provider,userRef} from "../firebaseConfig.js";

    export default {
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods:{
            fbSignIn : function () {
                let _this = this

                dbAuth.signInWithPopup(provider).then(function(result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;


                    _this.$router.replace('home')
                    console.log(user)
                    // alert("sd")
                    userRef.child(user.uid).set({
                        displayName:user.displayName,
                        photoURL:user.photoURL,
                        facebookUid:user.providerData[0].uid
                    })
                    // userRef.child(user.uid).child("photoURL/"+user.photoURL).push("s")



                    // console.log(user)
                    // ...

                }).catch(function(error) {


                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;

                    // console.log(errorCode+' : '+errorMessage+' : '+email+' : '+credential)
                    // ...
                });
            },
        }
    }
</script>

<style scoped>
  .dfdf {
      background-color:darkcyan;
  }
</style>
