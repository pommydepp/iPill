<template>
    <div>
        <el-container>
            <div class="container ">
                <h3 class="ht">Name Symptom *</h3>
                <el-input placeholder="Please input" class="txtTitle" v-model="sym.nameSym"></el-input>
                
                <h3 class="hd">Description *</h3>
                <el-input type="textarea"
                        :rows="10"
                        placeholder="Please input"
                        class="txtDes"
                        v-model="sym.descriptionSym">
                </el-input>

                <h3 class="hd">Intolerance</h3>
                <el-input type="textarea"
                        :rows="1"
                        placeholder="Please input"
                        class="txtAl"
                        v-model="sym.intoleranceSym">
                </el-input>

                <h3 class="hd">Gender</h3>
                <div class="checkSex">
                    <el-radio v-model="sym.sexSym" label="1">Male</el-radio>
                    <el-radio v-model="sym.sexSym" label="2">Female</el-radio>
                </div>

                <el-button type="success" round class="btnUpdate" style="margin-bottom: 10%;" @click="updateSymptom">Update Symptom</el-button>


            </div>
        </el-container>
    </div>
</template>

<script>
    import { sympRef } from '../firebaseConfig.js'
    export default {
        data() {
            return {
                sym:'',
                key:''
            }
        },
        methods: {
            updateSymptom:function () {
                // console.log(update)
                sympRef.child(this.key).update(this.sym)
                this.$route.replace({name:'Home'})

            }
            }

        ,
        created(){
            console.log(this.$route.params.key);
            let _this = this
            sympRef.child(this.$route.params.key).once("value")
                .then(function (snapshot) {
                    console.log(snapshot.val())
                    if(snapshot.val() === null){
                        _this.$route.push({name:'Home'})
                    }
                    _this.sym = snapshot.val()
                    _this.key = snapshot.key
                })
        }

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



    .btnUpdate {
        float: left;
    }
    .btnUpdate a{
        text-decoration: none;
        color: white;
    }
</style>