<template>
  <div>
      
      <el-menu :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color=""
                text-color=""
                active-text-color="">
        <el-menu-item index="1"><h2 class="btnHome"><a href="/home">iPill</a></h2></el-menu-item>
       
        <el-submenu index="2">
                <template slot="title">Pill Reminder</template>
                    <el-submenu index="2-1">
                        <template slot="title"><a href="/reminder" style="text-decoration: none; color: dodgerblue;">Week One</a></template>
                        <el-menu-item index="2-1-1">set 1</el-menu-item>
                        <el-menu-item index="2-1-2">set 2</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2-2">Week Two</el-menu-item>
                    <el-menu-item index="2-3">Week Three</el-menu-item>
                    <el-menu-item index="2-4">Week Four</el-menu-item>
                    
        </el-submenu>
        <el-menu-item index="3"><a href="/search" style="text-decoration: none;">Find Pharmacy</a></el-menu-item>

        <el-menu-item index="4"><a href="/contact" style="text-decoration: none;">Contact Us</a></el-menu-item>

        <!-- btn log out -->
        <div v-if="currentUser">
            <el-button round class="btnSignout" style="margin: 10px 20px 0 0px;" @click="signOut">Sign out</el-button>
            <span><img :src="currentUser.providerData[0].photoURL" class="profileImg"><div class="profileName">{{currentUser.displayName}}</div></span>
        </div>

        <!-- btn log in -->
        <el-button round class="btnLogin" style="margin: 10px 20px 0 0px;" v-else><router-link to="login">Login</router-link></el-button>

        </el-menu>

    </div>
</template>

<script>
import {dbAuth} from "../firebaseConfig"
  export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            currentUser:null
        };
    },
    created(){
            let _this = this
            dbAuth.onAuthStateChanged(function (user) {
                _this.currentUser = user
                console.log(user)
            })
        },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
        signOut:function () {
                let _this = this
                dbAuth.signOut().then(() => {
                    _this.$router.push({name: 'login'})
                })
        },
    },
  }
</script>

<style>
    .btnSignout {
        float: right;
    }
    .btnLogin {
        float: right;
    }
    .btnLogin a{
        text-decoration: none;
        color: black;
    }
    .btnHome {
        float: left;
        font-weight: bold;
        font-size: 18px;
    }
    .btnHome a {
        text-decoration: none;
    }
    .profileImg {
        float: right;
        border-radius: 30px;
        margin: 4px 20px 3px 0;
    }
    .profileName {
        float: right;
        color:dodgerblue;
        margin: 20px 20px;
        font-weight: bold;
    }
</style>

