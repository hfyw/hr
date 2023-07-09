<template>
  <div>
    <el-container>
      <el-aside
        :style="`background-color: ${$store.state.myColor};`"
        :width="isCollapse ? '200px' : '50px'"
      >
        <img
          :style="`width:${isCollapse ? '150px' : '30px'} `"
          src="@/assets/common/logo.png"
          alt=""
          class="logo"
        />
        <el-menu
          class="el-menu-vertical-demo"
          active-text-color="#39f"
          text-color="#fff"
          :background-color="$store.state.myColor"
          active-background-color="#fff"
          router
        >
          <el-menu-item index="/settings">
            <i class="iconfont icon-shouyedashboard"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="social_securitys">
            <i class="iconfont icon-jiegou"></i>
            <span slot="title">组织结构</span>
          </el-menu-item>
          <el-menu-item index="permissions">
            <i class="iconfont icon-people"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="approvals">
            <i class="iconfont icon-setting"></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="departments">
            <i class="iconfont icon-setting"></i>
            <span slot="title">权限设置</span>
          </el-menu-item>
          <el-menu-item index="salarys">
            <i class="iconfont icon-component"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="employees">
            <i class="iconfont icon-excel"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="user">
            <i class="iconfont icon-calculator"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="attendances">
            <i class="iconfont icon-quanxianshenpi"></i>
            <span slot="title">审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header :style="`background-color: ${$store.state.myColor};`">
          <div class="left">
            <i
              :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
              @click="changeFn"
              style="cursor: pointer"
            ></i>
            江苏传智博客教育科技股份有限公司
            <span class="tiyan">体验版</span>
          </div>
          <div class="right">
            <el-tooltip
              class="item"
              effect="dark"
              content="站内搜索"
              placement="bottom"
            >
              <i
                @click="handlerSearch"
                class="el-icon-search"
                style="cursor: pointer"
              ></i>
            </el-tooltip>
            <el-input
              ref="mySearch"
              v-if="inputFlag"
              @blur="inputFlag = false"
              v-model="input"
              placeholder="站内搜索"
            ></el-input>
            <el-tooltip
              class="item"
              effect="dark"
              content="全屏"
              placement="bottom"
            >
              <i
                style="cursor: pointer"
                class="iconfont icon-quanpingfangda"
                @click="handleScreen"
              ></i>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="多语言"
              placement="bottom"
            >
              <i style="cursor: pointer" class="iconfont icon-translate"></i>
            </el-tooltip>

            <el-tooltip
              class="item"
              effect="dark"
              content="换肤"
              placement="bottom"
            >
              <el-color-picker
                v-model="color"
                @change="changeColor"
              ></el-color-picker>
            </el-tooltip>
            <img
              src="@/assets/common/bigUserHeader.png"
              alt=""
              class="username"
            />
            <span> 管理员</span>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="首页">首页</el-dropdown-item>
                <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
          <!-- 底部版权信息 -->
          <myBottom />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getToken, removeToken } from '../utils/auth'
// 引入全屏插件
import screenfull from 'screenfull'
// 引入底部的版权
import myBottom from '../components/botoom/Bottom.vue'
export default {
  data() {
    return {
      // 颜色
      color: this.$store.state.myColor,
      // 折叠
      isCollapse: true,
      input: '', //搜索框数据
      inputFlag: false //input的显藏状态
    }
  },
  methods: {
    handleCommand(val) {
      let token = getToken()
      if (val == '退出登录') {
        removeToken(token)
        this.$router.push('/login')
        this.$message({
          message: '退出登录成功',
          type: 'success'
        })
      }
    },
    changeFn() {
      this.isCollapse = !this.isCollapse
    },
    // 点击全屏引用的插件 自带的方法
    handleScreen() {
      screenfull.toggle()
    },
    // 改变全体颜色
    changeColor(v) {
      this.$store.commit('changeColor', v)
    },
    // 去搜索
    handlerSearch() {
      this.inputFlag = true
      this.$nextTick(() => {
        this.$refs.mySearch.focus()
      })
    }
  },
  created() {},
  mounted() {},
  components: { myBottom },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-aside {
  position: relative;
  transition: all 0.5s;
  box-shadow: 0 0 11px #000;
  height: 100vh;
  .logBg {
    width: 100%;
    height: 100vh;
  }
  .logo {
    position: absolute;
    top: 25px;
    left: 25px;
    transition: all 0.5s;
    // background-color: pink;
  }
  .el-menu {
    position: absolute;
    top: 100px;
    left: 5px;
    width: 100%;
    // background-color: #5485fd;

    color: #fff;
    i {
      color: #fff;
      margin-right: 10px;
    }
  }
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .right {
    display: flex;
    align-items: center;
    i {
      margin: 10px;
      font-size: 20px;
      vertical-align: middle;
    }
    .username {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
    .el-dropdown {
      color: #fff;
    }
  }
  .left {
    display: flex;
    align-items: center;
    .tiyan {
      display: block;
      width: 50px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background-color: #84a9fe;
      border-radius: 5px;
      margin-left: 10px;
      padding: 5px;
    }
    .el-icon-s-fold {
      margin-right: 10px;
    }
  }
}

.el-main {
  background: #edeff2;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
