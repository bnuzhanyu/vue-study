<template>
  <div class="recomment">
    <div class="control">
      <div></div>
      <div>
        <el-button type="primary" @click="onCreate">
          add recommend
        </el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="recommend">
        <el-table-column align="center" prop="uni" label="uni" />
        <el-table-column align="center" label="created_at">
          <template #default="{ row }">{{ formatDate(row.created_at) }}</template>
        </el-table-column>
        <el-table-column align="center" label="recommended_course">
          <template #default="{ row }">
            <span v-for="(course, i) in row.content.plan_seq" :key="i" :style="{
              display: 'inline-block',
              marginRight: '5px',
              marginBottom: '5px'
            }">
              <el-tag type="success">{{ course }}</el-tag>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import request from '../utils/request'
import moment from 'moment'
import { ElNotification } from 'element-plus'
export default defineComponent({
  data() {
    return {
      recommend: []
    }
  },

  async mounted() {
    this.init()
  },

  methods: {
    formatDate(time) {
      return moment(time).format('yyyy-MM-DD hh:mm:ss')
    },

    async init() {
      const { data } = await request.get('/get_recommendation_list')
      this.recommend = data.data
    },

    async onCreate() {
      const mUin = prompt('please input user uin')
      if (!mUin) {
        return ElNotification.error({ message: 'please input user uin' })
      }
      await request.post('/create_recommendation', { uni: mUin })
      ElNotification.success({ message: 'success' })
      this.init()
    }
  }
})
</script>

<style lang="less" scoped>
.recomment {
  .control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
