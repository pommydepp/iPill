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
                    label=""
                    width="120">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" icon="el-icon-delete" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row><!-- end row - table -->


        <el-button type="" round style="margin: 30px 45% 30px 45%;">Add Pill Reminder</el-button>

    </div>
  
</template>

<script>
    export default {
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
        }
        },
        data() {
        return {
          tableData: [{
            date: '15/02/2018',
            pillName: 'Aceonm',
            time: 'Morning',
            quantity: '1',
            description: 'An angiotensin-converting enzyme inhibitor. It is used in patients with hypertension and heart failure. '
          },
          {
            date: '02/03/2018',
            pillName: 'Bicalutamide',
            time: 'Every 4 hourse',
            quantity: '2',
            description: 'Approved for treatment of advanced prostate cancer. '
          },
          {
            date: '18/04/2018',
            pillName: 'Permethrin',
            time: 'Before bed',
            quantity: '2',
            description: 'A pyrethroid insecticide commonly used in the treatment of LICE INFESTATIONS and SCABIES. '
          },
          {
            date: '18/04/2018',
            pillName: 'Emtricitabine',
            time: 'After dinner',
            quantity: '1',
            description: 'A deoxycytidine analog and REVERSE TRANSCRIPTASE INHIBITOR with antiviral activity against HIV-1 and HEPATITIS B viruses. It is used to treat HIV INFECTIONS.'
          },]
        }
      }
    }
  </script>

