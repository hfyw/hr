<template>
  <div class="ProcessApplication">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <div style="margin-bottom: 20px">
            <span
              style="
                padding: 5px;
                box-sizing: border-box;
                font-size: 24px;
                border-bottom: 3px solid #8a97f8;
              "
              >{{ title }}</span
            >
          </div>
          <slot></slot>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['title'],
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.ProcessApplication {
  width: 100%;
  height: 240px;
  margin-bottom: 20px;
  .el-card__body {
    padding: 10px 20px 0;
    box-sizing: border-box;
    span {
      padding: 5px;
      box-sizing: border-box;
      border-bottom: 3px solid #8a97f8;
    }
  }
}
</style>
