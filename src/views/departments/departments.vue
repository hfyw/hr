<template>
  <div>
    <el-card shadow="always">
      <div style="text-align: right">
        <el-button type="primary" icon="el-icon-edit" size="small"
          >添加菜单</el-button
        >
      </div>

      <el-table
        :data="table"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="菜单名称" sortable width="180">
        </el-table-column>
        <el-table-column prop="code" label="权限标识" sortable width="180">
        </el-table-column>
        <el-table-column prop="description" label="描述" sortable width="180">
        </el-table-column>
        <el-table-column prop="" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              v-show="scope.row.pid == 0"
              @click="handleClickMtk(scope.row)"
              >添加权限点</el-button
            >
            <el-button type="text"> 查看api权限 </el-button>
            <el-button type="text"> 查看 </el-button>
            <el-button type="text"> 删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <departmentsMtk :title="title" ref="departmentsMtk" />
  </div>
</template>

<script>
//引入接口
import { getData } from '@/utils/departments/api.js'
//引入处理插件
import { ProcessingTree } from '@/methods.js'
//引入模态框子组件
import departmentsMtk from './departmentsMtk/departmentsMtk.vue'
export default {
  name: 'homeDepartments',
  data() {
    return {
      table: [],
      title: '添加权限'
    }
  },
  methods: {
    queryList() {
      getData().then((res) => {
        console.log(res)
        this.table = ProcessingTree(res.data)
      })
    },
    handleClickMtk(v) {
      this.$refs.departmentsMtk.mtkFlag = true
      console.log(v)
    }
  },
  created() {
    this.queryList()
  },
  mounted() {},
  components: { departmentsMtk },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
