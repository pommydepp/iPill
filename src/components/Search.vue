<template>
  <div>

    <el-row :gutter="24" style="margin:30px 5% 30px 5%;">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Map" name="first">map</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
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