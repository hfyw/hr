<template>
  <div class="settingTop">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <img
            src="../../assets/common/head.jpg"
            alt=""
            style="height: 100px"
          />
          <div>
            <p>早安，管理员，祝你开心每一天！</p>
            <p style="color: #999">管理员|传智播客-总裁办</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#ff5046'
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
::v-deep .el-card__body {
  height: 100px;
  display: flex;
  vertical-align: middle;
  img {
    margin-right: 20px;
  }
  p {
    line-height: 40px;
    font-size: 24px;
  }
}
</style>
