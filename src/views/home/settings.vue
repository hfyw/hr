<template>
  <div class="settings">
    <!-- 顶部 -->
    <settingTop />
    <!-- 内容 -->
    <div class="settingContent">
      <div class="left">
        <!-- 日历 -->
        <settingCalendar />
        <!-- 公告 -->
        <announcement />
      </div>
      <div class="right">
        <!-- 流程申请 -->
        <ProcessApplication title="流程申请">
          <el-button
            @click="handleClick(v)"
            class="btn"
            v-for="(v, i) in list1"
            :key="i"
            >{{ v }}
          </el-button>
        </ProcessApplication>
        <!-- 快速开始/便捷导航 -->
        <ProcessApplication title="快速开始/便捷导航">
          <el-button
            @click="handleClick(v)"
            class="btn"
            v-for="(v, i) in list2"
            :key="i"
            >{{ v }}
          </el-button>
        </ProcessApplication>
        <!-- 帮助链接 -->
        <ProcessApplication title="帮助链接">
          <div style="padding: 0 20px; box-sizing: border-box">
            <img
              style="width: 100%"
              src="../../assets/common/icon.png"
              alt=""
            />
          </div>
        </ProcessApplication>
      </div>
    </div>
    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="申请类型">
          <el-select v-model="form.region">
            <el-option label="加班" value="1"></el-option>
            <el-option label="离职" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="加班开始时间">
          <el-date-picker
            v-model="form.createTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="加班结束时间">
          <el-date-picker
            v-model="form.overTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="补偿方式"> 调休 </el-form-item>
        <el-form-item label="加班原因">
          <el-input
            type="textarea"
            v-model="form.desc"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
//引入子组件
import settingTop from '../../components/settings/settingTop.vue'
//引入日历子组件
import settingCalendar from '../../components/settings/settingCalendar.vue'
//引入 审批流程子组件
import ProcessApplication from '../../components/settings/ProcessApplication.vue'
// 引入公告子组件
import announcement from '../../components/settings/announcement.vue'
export default {
  data() {
    return {
      value: new Date(),
      list1: ['加班离职', '请假调休', '审批列表', '我的信息'],
      list2: ['人事月报', '考勤查询', '考勤统计', '员工审核', '组织架构'],
      title: '', //模态框的标题
      dialogVisible: false, //模态框的状态
      // 模态框的表单数据
      form: {
        region: '1',
        overTime: '',
        createTime: '',
        desc: ''
      }
    }
  },
  methods: {
    //操作按钮
    handleClick(v) {
      console.log(v)
      this.title = v
      this.dialogVisible = true
    },
    onSubmit() {
      console.log(this.form)
    }
  },
  created() {},
  mounted() {},
  components: { settingTop, settingCalendar, ProcessApplication, announcement },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.settings {
  width: 100%;

  // 内容
  .settingContent {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
    .left {
      width: 55%;
    }
    .right {
      width: 44%;
    }
  }
}
.btn {
  width: 135px;
  height: 50px;
  margin: 0 15px 10px 0;
}
::v-deep .el-dialog__header {
  background: #66b1ff;
  color: #fff;
}
::v-deep .el-dialog__title {
  color: #fff;
}
</style>
