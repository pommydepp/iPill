<template>
    <div>
  
        <div class="jumbotron" style="width:100%; height:320px;">
          <h1 style="font-size: 36px; font-weight: bold; padding: 6% 0 0 15%; color: white;">iPill - Pharmacy Online</h1>
          <p style="font-size: 18px; padding: 1% 0 0 15%; color: white;">If you have any symptoms that you can help yourself.</p>
          <p></p>
          <a href="/create">
            <el-button type="success" round style="margin: 1% 0 0 15%;">Post Symptom</el-button>
          </a>
        </div>

        <h2 style="margin:40px 2% 10px 4%; font-weight: bold; font-size: 24px;">The Latest</h2>
          <el-row :gutter="24" style="margin:10px 2% 30px 2%;">
            <div v-for="i in mySym">
              <el-col :md="8">
                <el-card class="box-card" style="margin: 5% 2% 2% 2%;">
                  <div slot="header" class="clearfix" style="font-weight: bold; font-size: 21px;">
                    <span>{{ i.nameSym }}</span>
                    <router-link :to="{ name: 'edit' ,params:{key:i['.key']}}">
                      <el-button class="el-icon-edit" style="float: right; margin-top: -10px; margin-right: -10px;" size="medium" type="primary" circle></el-button>
                    </router-link>
                  </div>
                  <div style="font-size: 16px; line-height: 28px;">{{ i.descriptionSym }}</div>
                  <br>
                  <div v-if="i.user_id == user['.key']" v-for="user in myUser" style="margin-top:3%;">
                    Post By {{user.displayName}}
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-row><!-- end row post  -->

          <el-row :gutter="24" style="margin:30px 2.5% 30px 2.5%;">
            <el-col :md="12">
            <el-card class="box-card">
              <div class="text item" style="line-height: 24px; font-size: 13px;">
                At The Online Drugstore, your favorite health and beauty products are just a click away. Our online drugstore products make it easy to have drugstore items conveniently shipped straight to your door. From over-the-counter medications to diabetic supplies to baby care needs, our selection includes everything you’d find at your local drugstore and more. You’ll be able to easily compare products and read helpful user reviews to find the products that best fit your needs. When you visit our online drugstore, it’s easy to make informed decisions about your health. <br><br>
                In addition to carrying a wide selection of products, The Online Drugstore also offers some of the most affordable prices online or in stores. Our everyday low prices beat retail prices every time. You’ll find that most of our products are significantly discounted, including items that are rarely on sale elsewhere, like vitamins, supplements and sexual health products. And unlike regular pharmacies, we offer many of our products in bulk, giving you an even greater discount. Plus, you won’t have to leave home, so you’ll save time and gas, too. Our free shipping on orders over $49 only adds to the savings when you shop at The Online Drugstore.<br>
              </div>
            </el-card>
            </el-col>
            
            <el-col :md="12">
            <el-card class="box-card">
              <div class="text item">
               <el-button type="text" icon="el-icon-time">Open</el-button> 
               <p style="float: right; padding-top: 10px; font-size: 14px;">Open hours today: 6:00 am - 11:00 pm</p>
              </div>
            </el-card>
            </el-col>

            <el-col :md="12">
            <el-card class="box-card imageDrug" style="margin-top: 20px; height: 276px;">
            </el-card>
            </el-col>
            
          </el-row><!-- end row - map -->

          <el-row :gutter="24" style="margin:50px 2.5% 30px 2.5%;">
            <el-col :sm="4" v-for="(o, index) in drugStore" :key="o" :offset="index > 2 ? 0 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.drugPic" class="image" style="padding: 30px 0 20px 30px; width: 70%; height:200px; background-position: ;">
                <div style="padding: 14px;">
                  <p>{{ o.drugName }}</p>
                  <p>{{ o.drugPrice }}</p>
                  <div class="bottom clearfix">
                    <el-button type="" round class="button" style="margin: 20px 30% 0 30%;">Buy</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row><!-- end row - drug -->


          <el-row :gutter="24" style="margin:30px 2.5% 30px 2.5%;">
            <el-col :md="12">
              <el-card class="box-card">
                <h2 style="font-weight: bold; font-size: 18px; line-height: 28px;">Health Tip: Find Your Resting Heart Rate</h2>
                <div class="text item" style="line-height: 24px; font-size: 13px;">
                  A normal resting heart rate is between 60 and 100 beats per minute, but this rate will be affected by a person's stress, caffeine consumption, anxiety, hormones, medication and fitness level, the American Heart Association says. Your resting heart rate is the number of times your heart beats in a minute while you are at rest. The best time to check...                
                </div>
              </el-card>

              <el-card class="box-card" style="margin-top: 20px;">
                <h2 style="font-weight: bold; font-size: 18px; line-height: 28px;">Sun's UV Rays a Threat to Your Eyes, Too</h2>
                <div class="text item" style="line-height: 24px; font-size: 13px;">
                  It's not just your skin that needs protection from ultraviolet rays, health experts warn. UV rays from the sun can cause corneal sunburn (photokeratitis) and UV damage that has been linked to macular degeneration, cataracts, cancer and pterygium (a growth on the white part of the eye), according to Prevent Blindness, a nonprofit eye health and safety...
                </div>
              </el-card>

              <el-card class="box-card" style="margin-top: 20px;">
                <h2 style="font-weight: bold; font-size: 18px; line-height: 28px;">Hair Care Products for Black Women May Disrupt Hormones</h2>
                <div class="text item" style="line-height: 24px; font-size: 13px;">
                  Many black women use a plethora of hair care products that contain chemicals that can interfere with their hormones, researchers warn. They noted these chemicals could be a reason why black women have higher rates of certain hormone-related health conditions than other women in the United States. For example, black women begin puberty at younger ages,...                
                </div>
              </el-card>

            </el-col>

            <el-col :md="12">
              <el-card class="box-card imageApp" style="height: 500px;">
              </el-card>
            </el-col>


            
          </el-row><!-- end row health content -->
          
    </div>
</template>

<script>
import {dbAuth,provider,userRef,sympRef,drugstoreRef} from "../firebaseConfig.js";
export default {
  firebase:{
    mySym:sympRef,
    myUser:userRef,
  },
  data(){
    return{
      drugStore:[{
        drugPic: require('../assets/drug1.jpg'),
        drugName:'Marijuana',
        drugPrice:'125฿'
      },
      {
        drugPic: require('../assets/drug2.jpg'),
        drugName:'Macus rerif cough',
        drugPrice:'135฿'
      },
      {
        drugPic: require('../assets/drug3.jpg'),
        drugName:'Nature Truth Calcium',
        drugPrice:'325฿'
      },
      {
        drugPic: require('../assets/drug4.jpg'),
        drugName:'Muro 128',
        drugPrice:'85฿'
      },
      {
        drugPic: require('../assets/drug5.jpg'),
        drugName:'Zeasorb',
        drugPrice:'600฿'
      },
      {
        drugPic: require('../assets/drug6.jpg'),
        drugName:'Dayquil',
        drugPrice:'170฿'
      },
      
      ]
    }
  }

}
</script>

<style>
  .jumbotron {
    background-image: url("../assets/cover-ipill.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .imageDrug {
    background-image: url("../assets/pharmacy1.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .imageApp {
    background-image: url("../assets/app.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
</style>



