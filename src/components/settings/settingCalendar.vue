<template>
  <div class="settingCalendar">
    <el-row :gutter="24">
      <el-col style="margin-bottom: 10px">
        <el-card shadow="always">
          <div class="rl">
            <h1>工作日历</h1>
            <el-calendar>
              <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
              <template slot="dateCell" slot-scope="{ date, data }">
                <!-- {{ data.day.split("-").slice(2).join("-") }} -->
                <p :class="data.isSelected ? 'is-selected' : ''">
                  {{
                    data.day.split('-').slice(2).join('-') > 9
                      ? data.day.split('-').slice(2).join('-')
                      : data.day.split('-').slice(2).join('-').split('')[1]
                  }}
                  <span
                    class="xiu"
                    v-show="date.getDay() === 0 || date.getDay() === 6"
                    >休</span
                  >
                </p>
              </template>
            </el-calendar>
          </div>
        </el-card></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  },
  methods: {
    isRestDay(date) {
      const day = date.getDay()
      return day === 0 || day === 6
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
.settingCalendar {
  width: 100%;
  .el-card {
    max-height: 454px;
    .el-calendar {
      max-height: 454px !important;
      .el-calendar__body {
        height: 100% !important;
      }
    }
  }
}
.rest-day-marker {
  color: red;
  font-weight: bold;
}

// 替代ui样式
//#region
::v-deep .el-calendar-table td.is-today {
  color: #fff;
}

::v-deep .el-calendar-table td.is-today p {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  background-color: rgb(39, 122, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
}

::v-deep .el-calendar-table .el-calendar-day {
  position: relative;
  box-sizing: border-box;
  padding: 0 8px;
  line-height: 50px;
  text-align: center;
  height: 50px;
}

::v-deep .el-calendar-table thead th:nth-child(n + 6) {
  color: red;
}

::v-deep .el-calendar-table thead th:nth-child(n + 4) {
  font-weight: bolder;
}

.xiu {
  color: #fff;
  display: inline-block;
  background-color: tomato;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}

::v-deep .el-calendar-table td,
::v-deep .el-calendar__header,
::v-deep .el-calendar-table tr:first-child td,
::v-deep .el-calendar-table tr td:first-child {
  border: none;
}
::v-deep .is-selected {
  p {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #277aff;
    color: #fff;
    border-radius: 50%;
  }
}
</style>
