<template>
  <div>

    <el-row :gutter="24" style="margin:30px 5% 30px 5%;">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Map" name="first">
          <div style="margin-top: 15px;">
            <el-input placeholder="Input your Location" v-model="input5" class="input-with-select">
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <h2 style="margin-top: 40px; font-weight: bold; font-size: 24px;">ร้านยาฟามาเพลส</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.2726524087893!2d99.95690905070191!3d12.564264927040366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fdabb0482188ef%3A0x6240d16af07084f1!2z4Lij4LmJ4Liy4LiZ4Lii4Liy4Lif4Liy4Lij4LmM4Lih4Liy4LmA4Lie4Lil4Liq!5e0!3m2!1sen!2sth!4v1526269914136" width="800" height="450" frameborder="0" style="border:0; margin: 40px 0 170px 40px;;" allowfullscreen></iframe>
          
        </el-tab-pane>
        <el-tab-pane label="Category" name="second"></el-tab-pane>
      </el-tabs>
    </el-row>

    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>