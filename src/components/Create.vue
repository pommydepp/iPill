<template>
    <div>
        <el-container>
            <div class="container ">
                <h3 class="ht">Name Symptom *</h3>
                <el-input placeholder="Please input" class="txtTitle" v-model="newSymptom.nameSym"></el-input>
                
                <h3 class="hd">Description *</h3>
                <el-input type="textarea"
                        :rows="10"
                        placeholder="Please input"
                        class="txtDes"
                        v-model="newSymptom.descriptionSym">
                </el-input>

                <h3 class="hd">Intolerance</h3>
                <el-input type="textarea"
                        :rows="1"
                        placeholder="Please input"
                        class="txtAl"
                        v-model="newSymptom.intoleranceSym">
                </el-input>

                <h3 class="hd">Gender</h3>
                <div class="checkSex">
                    <el-radio v-model="newSymptom.sexSym" label="Male">Male</el-radio>
                    <el-radio v-model="newSymptom.sexSym" label="Female">Female</el-radio>
                </div>

                <h3 class="hd">Duration</h3>
                <div class="timeSym">
                    <el-time-picker
                        v-model="newSymptom.timeSym1"
                        :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="Arbitrary time">
                    </el-time-picker>
                    <el-time-picker
                        v-model="newSymptom.timeSym2"
                        arrow-control
                        :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="Arbitrary time">
                    </el-time-picker>
                </div>

                <el-button type="success" round class="btnCreate" style="margin-bottom: 10%;" @click="addSymptom">Post Symptom</el-button>


            </div>
        </el-container>
    </div>
</template>

<script>
import {dbAuth,provider,sympRef} from "../firebaseConfig.js";
export default {
    data() {
        return {
            newSymptom: {
                nameSym:'',
                descriptionSym:'',
                intoleranceSym:'',
                sexSym: true,
                timeSym1: new Date(2016, 9, 10, 6, 40),
                timeSym2: new Date(2016, 9, 10, 6, 40),
                user_id:''
            }, 
             currentUser:null

        }
    },
    methods : {
        addSymptom: function() {
            this.newSymptom.timeSym2 = String(this.timeSym2)
            this.newSymptom.user_id = this.currentUser.uid
            console.log(this.newSymptom)
            sympRef.push(this.newSymptom)

            this.newSymptom.nameSym = ''
            this.newSymptom.descriptionSym = ''
            this.newSymptom.intoleranceSym = ''
            this.newSymptom.sexSym = ''
            this.newSymptom.timeSym1 = ''

            this.$router.push({ name:'home'})
        }
    },
     created(){
            let _this = this
            dbAuth.onAuthStateChanged(function (user) {
                _this.currentUser = user
                console.log(user)
            })
        },
    
}
</script>

<style>
    .container {
        width: 70%;
        margin: 0 auto;
        float: left;
    }
    .ht {
        float: left;
        margin-top: 5%;
        margin-bottom: 2%
    }

    .txtTitle {
        float: left;
        margin-bottom: 5%;
    }
    .hd {
        float: left;
        margin-bottom: 2%
    }
    .txtDes {
        float: left;
        margin-bottom: 5%;
    }
    .txtAl {
        float: left;
        margin-bottom: 5%;
    }

    .checkSex {
        float: left;
        width: 100%;
        margin-bottom: 5%;
    }
    .checkSex h3 {
        float: left;
        margin-top: 5%;
    }
    .timeSym {
        float: left;
        width: 100%;
        margin-bottom: 5%;
    }



    .btnCreate {
        float: left;
    }
    .btnCreate a{
        text-decoration: none;
        color: white;
    }
</style>


