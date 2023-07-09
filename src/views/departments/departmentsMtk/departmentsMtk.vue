<template>
  <div>
    <el-dialog :title="title" :visible.sync="mtkFlag" width="40%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="权限名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="企业可见">
          <el-switch v-model="form.type"></el-switch>
        </el-form-item>
        <el-form-item label="菜单顺序">
          <el-input v-model="form.menuOrder"></el-input>
        </el-form-item>
        <el-form-item label="菜单icon">
          <el-input v-model="form.menuIcon"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
//添加的接口
import { addData } from '@/utils/departments/api.js'
export default {
  props: ['title'],
  data() {
    return {
      mtkFlag: false,
      form: {}
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      addData(this.form).then((res) => {
        console.log(res)
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  background: #66b1ff;
}
</style>
