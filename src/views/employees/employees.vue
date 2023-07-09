<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="24">
        <el-card shadow="always">
          <!-- 头部   第一行 弹框+ 导入  -->
          <div class="fx-b">
            <el-alert
              title="有 0 条考勤审批尚未处理 alert"
              type="info"
              :closable="false"
              show-icon
              style="
                width: auto;
                border: 1px solid skyblue;
                color: #000;
                background-color: rgb(233, 249, 255);
              "
            >
            </el-alert>
            <div>
              <el-button type="primary" size="mini">导入</el-button>
              <el-button type="primary" size="mini">提醒</el-button>
              <el-button type="primary" size="mini">设置</el-button>
              <el-button type="primary" size="mini">历史归档</el-button>
              <el-button type="primary" size="mini">3月份报表</el-button>
            </div>
          </div>
          <!-- 部门+考勤状态 -->
          <div class="DepartmentAttendance">
            <p class="fx-t">
              <big>部门:</big>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="总裁办"></el-checkbox>
                <el-checkbox label="行政部"></el-checkbox>
                <el-checkbox label="人事部"></el-checkbox>
                <el-checkbox label="财务部"></el-checkbox>
                <el-checkbox label="技术部"></el-checkbox>
                <el-checkbox label="运营部"></el-checkbox>
                <el-checkbox label="市场部"></el-checkbox>
                <el-checkbox label="财务核算部"></el-checkbox>
                <el-checkbox label="税务管理部"></el-checkbox>
                <el-checkbox label="薪资管理部"></el-checkbox>
                <el-checkbox label="Java研发部"></el-checkbox>
                <el-checkbox label="Python研发部"></el-checkbox>
                <el-checkbox label="Php研发部"></el-checkbox>
                <el-checkbox label="北京事业部"></el-checkbox>
                <el-checkbox label="上海事业部"></el-checkbox>
              </el-checkbox-group>
            </p>
            <p class="fx-t">
              <big>考勤状态:</big>
              <el-radio-group v-model="radioList">
                <el-radio :label="0"> 正常 </el-radio>
                <el-radio :label="1"> 旷工</el-radio>
                <el-radio :label="2"> 事假</el-radio>
                <el-radio :label="3"> 调休</el-radio>
                <el-radio :label="4"> 迟到</el-radio>
                <el-radio :label="5"> 早退</el-radio>
              </el-radio-group>
            </p>
          </div>
        </el-card></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card shadow="always">
          <div>
            <!-- 表格 -->
            <el-table :data="table" style="width: 100%" border>
              <el-table-column prop="" label="序号" type="index">
              </el-table-column>
              <el-table-column prop="username" label="姓名"> </el-table-column>
              <el-table-column prop="workNumber" label="工号">
              </el-table-column>
              <el-table-column prop="departmentName" label="部门">
              </el-table-column>
              <el-table-column prop="mobile" label="手机号" width="150">
              </el-table-column>
              <el-table-column width="1"></el-table-column>
              <template>
                <el-table-column
                  v-for="(item, index) in table[0].attendanceRecord"
                  :key="index"
                  :prop="item.id"
                  :label="'3/' + (index * 1 + 1)"
                >
                  <template slot-scope="scope">
                    {{
                      scope.row.attendanceRecord[0].jobStatu === 0
                        ? '矿工'
                        : scope.row.attendanceRecord[0].jobStatu
                    }}
                  </template>
                </el-table-column>
              </template>
            </el-table>
            <el-pagination
              class="fx-end"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="page"
              :page-size="size"
              layout="total, prev, pager, next"
              :total="total"
            >
            </el-pagination>
          </div> </el-card
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { getuser } from '@/utils/employees/api'
export default {
  created() {
    this.getTbale()
  },
  data() {
    return {
      page: 1,
      size: 10,
      total: 0, //总条数
      table: [{ attendanceRecord: [] }],
      itemobj: {}, //每一条数据
      dialogVisible: false, //弹出框显隐
      formInline: {
        //转正表单
        user: '',
        region: ''
      },
      // 部门复选框list
      checkList: [],
      radioList: []
    }
  },
  methods: {
    getTbale() {
      getuser({ page: this.page, pagesize: this.size }).then((res) => {
        //console.log(res)
        this.total = res.data.data.total
        this.table = res.data.data.rows
        //console.log(this.table)
      })
    },
    handleSizeChange(val) {
      // //console.log(`每页 ${val} 条`)
      this.size = val
      this.getTbale()
    },
    handleCurrentChange(val) {
      // //console.log(`当前页: ${val}`)
      this.page = val
      this.getTbale()
    }
  }
}
</script>

<style lang="scss" scoped>
// 部门+ 考勤
.DepartmentAttendance {
  margin: 30px 20px;
  > p {
    align-items: flex-start;
    > big {
      font-weight: bold;
      width: 100px;
    }
    > div {
      width: calc(100% - 100px);
      label {
        margin-bottom: 10px;
      }
    }
  }
}

// 提示框icon颜色
::v-deep .el-icon-info:before {
  content: '\e7a1';
  color: rgb(56, 192, 246);
}
</style>
