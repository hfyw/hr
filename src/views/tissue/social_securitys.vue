<template>
  <div>
    <el-card shadow="always">
      <el-tabs v-model="activeName">
        <el-tab-pane
          label="组织结构"
          name="first"
          style="padding: 30px 120px 0"
        >
          <div class="top">
            <span><i class="el-icon-delete-solid"></i> {{ totalName }}</span>
            <span
              ><span class="aa">负责人</span>
              <el-dropdown>
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">添加子部门</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown></span
            >
          </div>
          <el-tree :data="newArr" :props="defaultProps">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span>
                <span> {{ data.manager }}</span>

                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="{ id: data.id, status: 'add' }"
                      >添加子部门</el-dropdown-item
                    >
                    <el-dropdown-item :command="{ id: data.id, status: 'look' }"
                      >查看部门</el-dropdown-item
                    >
                    <el-dropdown-item :command="{ id: data.id, status: 'del' }"
                      >删除部门</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </span>
          </el-tree>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 模态框 -->
    <tissueMtk
      :title="title"
      ref="mtk"
      :id="id"
      @addSuccess="addSuccess"
    ></tissueMtk>
  </div>
</template>

<script>
//引入接口
import { getTissue, delTissue } from '@/utils/tissue/api.js'
import { STATUS } from '@/utils/codeFlag.js'
// 处理数据方法
import { ProcessingTree } from '@/methods.js'
//引入模态框组件
import tissueMtk from '../../components/tissue/tissueMtk.vue'

export default {
  data() {
    return {
      activeName: 'first',
      newArr: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      totalName: '',
      title: '添加部门',
      id: '12'
    }
  },
  methods: {
    // 获取数据
    queryTiss() {
      getTissue().then((res) => {
        if (res.code === STATUS.CODE) {
          this.newArr = ProcessingTree(res.data.depts)
          this.totalName = res.data.companyName
        }
      })
    },
    handleCommand(v) {
      if (v.status == 'add') {
        //添加部门
        this.title = '添加部门'
        this.$refs.mtk.mtkFlag = true
      } else if (v.status == 'look') {
        this.title = '查看部门'
        this.$refs.mtk.mtkFlag = true
        this.id = v.id
      } else if (v.status == 'del') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            delTissue({ id: v.id }).then((res) => {
              let { message } = res
              if (res.code == STATUS.CODE) {
                this.$message({
                  message,
                  type: 'success'
                })
                this.queryTiss()
              } else {
                this.$message({
                  message,
                  type: 'warning'
                })
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    // 子添加成功后调用接口刷新页面
    addSuccess() {
      console.log(1)
      this.queryTiss()
    }
  },
  created() {
    // 获取数据
    this.queryTiss()
  },
  mounted() {},
  components: { tissueMtk },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
::v-deep .custom-tree-node {
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #303133;
}
::v-deep .el-dropdown {
  margin-left: 20px;
}
.top {
  width: 100%;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

::v-deep .is-leaf::before {
  content: '\e633';
  font-family: 'iconfont';
  color: #000;
  font-size: 20px;
}
</style>
