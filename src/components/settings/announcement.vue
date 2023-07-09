<template>
  <div class="announcement">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <h2>公告</h2>
          <ul>
            <li>
              <div><img src="../../assets/common/img.jpeg" alt="" /></div>
              <div class="txt">
                <p>
                  <span style="color: #4979fa">朱吉柳</span> 发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p>2018-07-21 15:21:38</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/common/img.jpeg" alt="" /></div>
              <div class="txt">
                <p>
                  <span style="color: #4979fa">朱吉柳</span> 发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p>2018-07-21 15:21:38</p>
              </div>
            </li>
            <li>
              <div><img src="../../assets/common/img.jpeg" alt="" /></div>
              <div class="txt">
                <p>
                  <span style="color: #4979fa">朱吉柳</span> 发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p>2018-07-21 15:21:38</p>
              </div>
            </li>
          </ul>
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
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
img {
  width: 56px;
}
h2 {
  margin-bottom: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
ul {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    .txt {
      width: 90%;
    }
  }
}
</style>
