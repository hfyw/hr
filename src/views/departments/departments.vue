<template>
  <div>
    <el-card shadow="always">
      <div style="text-align: right">
        <input type="file" ref="fileInput" @change="handleFile" />
        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          @click="exportData"
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
            <el-button type="text" v-show="scope.row.pid == 0"
              >添加权限点</el-button
            >
            <el-button type="text"> 添加权限点 </el-button>
            <el-button type="text"> 查看api权限 </el-button>
            <el-button type="text"> 查看 </el-button>
            <el-button type="text"> 删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
//引入接口
import { getData } from '@/utils/departments/api.js'
//引入处理插件
import { ProcessingTree } from '@/methods.js'
import XLSX from 'xlsx'
export default {
  name: 'homeDepartments',
  data() {
    return {
      table: []
    }
  },
  methods: {
    queryList() {
      getData().then((res) => {
        console.log(res)
        this.table = ProcessingTree(res.data)
      })
    },

    handleFile(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]

        // 在这里你可以根据需要处理导入的表格数据
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        console.log(jsonData)
      }

      reader.readAsArrayBuffer(file)
    },
    exportData() {
      const worksheet = XLSX.utils.json_to_sheet([
        { Name: 'John', Age: 30 },
        { Name: 'Jane', Age: 25 },
        { Name: 'Bob', Age: 40 }
      ])

      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

      XLSX.writeFile(workbook, 'data.xlsx')
    }
  },
  created() {
    this.queryList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
