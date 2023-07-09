<template>
  <div>
    <!-- 新增按钮 -->
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="24">
        <el-card shadow="always" style="text-align: right">
          <el-button
            :style="`background-color: ${$store.state.myColor};border:1px solid  ${$store.state.myColor}`"
            size="small"
            type="primary"
            >导入</el-button
          >
          <el-button
            :style="`background-color: ${$store.state.myColor};border:1px solid  ${$store.state.myColor}`"
            size="small"
            type="primary"
            icon="el-icon-plus"
            >新增员工</el-button
          >
        </el-card>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <!-- 表格数据 -->
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
          >
            <el-table-column
              fixed
              sortable
              prop="date"
              label="序号"
              width="50"
              type="index"
            ></el-table-column>

            <el-table-column
              sortable
              prop="username"
              label="姓名"
              width="100"
            ></el-table-column>
            <el-table-column
              sortable
              prop="mobile"
              label="手机号"
              width="150"
            ></el-table-column>
            <el-table-column
              sortable
              prop="workNumber"
              label="工号"
            ></el-table-column>
            <el-table-column
              sortable
              prop="enableState"
              label="聘用形势"
            ></el-table-column>
            <el-table-column
              sortable
              prop="departmentName"
              label="部门"
            ></el-table-column>
            <el-table-column sortable label="入职时间" width="150">
              <template slot-scope="scope">
                {{ scope.row.createTime | timeFormat }}
              </template>
            </el-table-column>
            <el-table-column sortable prop="inServiceStatus" label="是否在职">
              <template slot-scope="scope">
                {{ scope.row.inServiceStatus ? '在职' : '离职' }}
              </template>
            </el-table-column>
            <el-table-column sortable prop="formOfEmployment" label="状态">
              <template slot-scope="scope">
                {{ scope.row.formOfEmployment ? '可用' : '不可用' }}
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="250px">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row, '查看')"
                  type="text"
                  size="small"
                  v-color="$store.state.myColor"
                  >查看</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="handleClick(scope.row, '转正')"
                  v-color="$store.state.myColor"
                  >转正</el-button
                >
                <el-button
                  v-color="$store.state.myColor"
                  type="text"
                  size="small"
                  >调岗</el-button
                >
                <el-button
                  v-color="$store.state.myColor"
                  type="text"
                  size="small"
                  >离职</el-button
                >
                <el-button
                  v-color="$store.state.myColor"
                  type="text"
                  size="small"
                  >角色</el-button
                >
                <el-button
                  v-color="$store.state.myColor"
                  type="text"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @current-change="handleCurrentChange"
            layout="total,prev, pager, next"
            :total="user.total"
          >
          </el-pagination>
        </el-card>
      </el-col>
    </el-row>
    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form">
        <el-form-item label="转正时间" label-width="80px">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="转正评价" label-width="80px">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleClickMtk">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
//引入获取表格数据接口
import { getSole, getDetail } from '../../utils/permissions/api'
//引入处理时间插件
import moment from 'moment'
export default {
  name: 'homePermissions',
  data() {
    return {
      tableData: [],
      user: {
        page: 1,
        size: 10,
        total: 0
      },
      title: '转正',
      dialogVisible: false, //模态框状态
      form: {}
    }
  },
  methods: {
    handleCurrentChange(v) {
      this.user.page = v
      this.queryList()
    },
    // 获取数据
    queryList() {
      getSole(this.user).then((res) => {
        this.tableData = res.data.rows
        this.user.total = res.data.total
      })
    },

    handleClick(v, i) {
      if (i == '查看') {
        // 查看
      } else if (i == '转正') {
        // 转正
        this.dialogVisible = true
        this.title = i
        console.log(v)
        getDetail({ id: v.id }).then((res) => {
          console.log(res)
        })
      }
    },
    handleClickMtk() {
      console.log(this.form)
    }
  },
  created() {
    this.queryList()
  },
  filters: {
    timeFormat() {
      return moment().format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  text-align: right;
}
::v-deep .el-dialog__header {
  background: #66b1ff;
  color: #fff;
}
::v-deep .el-dialog__title {
  color: #fff;
}
</style>
