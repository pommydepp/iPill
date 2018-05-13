<template>
    <div>
        <el-row style="margin: 2% 6% 2% 6%;">
            <el-table
                :data="tableData"
                style="width: 100%;">
                <el-table-column
                    prop="date"
                    label="Date"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="pillName"
                    label="Pill Name"
                    width="360">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="Time"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="quantity"
                    label="Quantity"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="Description">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="Operations"
                    width="120">
                    <template slot-scope="scope">
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row><!-- end row - table -->

        <el-button type="" round style="margin: 30px 45% 30px 45%;">Add Pill Reminder</el-button>

    </div>
  
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            pillName: 'Tom',
            time: 'No. 189, Grove St, Los Angeles',
            quantity: 'No. 189, Grove St, Los Angeles',
            description: 'No. 189, Grove St, Los Angeles'
          },
          {
            date: '2016-05-03',
            pillName: 'Tom',
            time: 'No. 189, Grove St, Los Angeles',
            quantity: 'No. 189, Grove St, Los Angeles',
            description: 'No. 189, Grove St, Los Angeles'
          },
          {
            date: '2016-05-03',
            pillName: 'Tom',
            time: 'No. 189, Grove St, Los Angeles',
            quantity: 'No. 189, Grove St, Los Angeles',
            description: 'No. 189, Grove St, Los Angeles'
          },
          {
            date: '2016-05-03',
            pillName: 'Tom',
            time: 'No. 189, Grove St, Los Angeles',
            quantity: 'No. 189, Grove St, Los Angeles',
            description: 'No. 189, Grove St, Los Angeles'
          },]
        }
      }
    }
  </script>

