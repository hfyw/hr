<template>
  <div>
    <el-dialog :title="title" :visible.sync="mtkFlag" width="40%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="部门名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select v-model="form.manager" placeholder="请选择">
            <el-option
              v-for="v in list"
              :key="v.id"
              :label="v.username"
              :value="v.username"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.introduce"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="mtkFlag = false">取消</el-button>
          <el-button type="primary" @click="onSubmit" :disabled="btnFlag"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
//引入接口
import { getSelect, addTissue, lookTissue } from '@/utils/tissue/api.js'
//状态码的统一判断
import { STATUS } from '@/utils/codeFlag.js'
export default {
  props: ['title', 'id'],
  data() {
    return {
      form: {},
      mtkFlag: false,
      list: [],
      btnFlag: false
    }
  },
  methods: {
    onSubmit() {
      if (this.title == '添加部门') {
        addTissue(this.form).then((res) => {
          let { message } = res
          if (res.code == STATUS.CODE) {
            this.$message({
              message,
              type: 'success'
            })
            this.$emit('addSuccess')
          } else {
            this.$message({
              message,
              type: 'warning'
            })
          }
          this.mtkFlag = false
        })
      } else if (this.title == '查看部门') {
        console.log(this.id)
      } else if (this.title == '删除部门') {
        console.log(3)
      }
    }
  },
  created() {},
  mounted() {
    // 下拉菜单的数据
    getSelect().then((res) => {
      this.list = res.data
    })
  },
  components: {},
  computed: {},
  watch: {
    title: {
      handler(v) {
        if (v == '查看部门') {
          //表单的数据

          lookTissue({ id: this.id }).then((res) => {
            console.log(res)
            this.form = res.data
          })
          this.btnFlag = true
        } else if (v == '添加部门') {
          for (const i in this.form) {
            this.form[i] = ''
          }
          this.btnFlag = false
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  background: #66b1ff;
}
</style>
