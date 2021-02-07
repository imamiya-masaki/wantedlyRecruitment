<template>
  <div class="home">
    <view-modal :item="targetItem" ref="modal"/>
    <right-bar class="right" @search="queryAction" :currentItems="currentItem" @modalItem="modalAction"/>
    <left-view
      :items="recruitInfo"
      :row="total_objects"
      :perPage="per_page"
      @pagination="paginateActuion"
      @modalItem="modalAction"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import RightBar from '@/components/RightBar.vue'
import LeftView from '@/components/LeftView.vue'
import ViewModal from '@/components/ViewModal.vue'

export default {
  name: 'Recruit',
  components: {
    RightBar,
    LeftView,
    ViewModal
  },
  methods: {
    async loading(setQuery, setPaging) {
      const query = setQuery || ''
      const paging = setPaging || 1
      const baseURL = 'https://asia-northeast1-wantedly-dev.cloudfunctions.net/exam_projects'
      const targetURL = `${baseURL}?q=${query}&page=${paging}`
      console.log('loading!!', targetURL)
      this.recruitInfo = {}
      this.axios.get(targetURL).then((res) => {
        this.recruitInfo = res.data.data
        this.status = res.status
        if (this.status !== 200) {
          return
        }
        this.statusText = res.statusText
        this.metaData = res.data.metaData
        console.log('statusText', res.statusText)
        console.log('metaDEta', res.data['_metadata'])
        this.total_objects = res.data['_metadata'].total_objects
        this.per_page = res.data['_metadata'].per_page
        console.log('keys', Object.keys(res.data.data), res.status, targetURL)
      })
    },
    paginateActuion (paging) {
      this.stockCurrentPage = paging
      console.log('paging', paging)
      this.loading(this.stockCurrentQuery, this.stockCurrentPage)
    },
    queryAction (query) {
      this.stockCurrentQuery = query
      console.log('query', query)
      this.loading(this.stockCurrentQuery, this.stockCurrentPage)
    },
    modalAction (item) {
      let flag = false
      for (let i = 0; i < this.currentItem.length; i += 1) {
        // 固定値5なのでmapよりも愚直に
        if (item.id === this.currentItem[i].id) {
          this.currentItem.splice(i, 1)
        }
      }
      if (!flag && this.currentItem.length >= 5) {
        this.currentItem.pop()
      }
      this.currentItem.unshift(item)
      this.targetItem = item
      console.log('modalAction', item, this.currentItem)
      this.$refs.modal.modalFlag = true
    }
  },
  data() {
    return {
      recruitInfo: {},
      status: '',
      statusText: '',
      metaData: {},
      total_objects: 0,
      per_page: 0,
      stockCurrentPage: 1,
      stockCurrentQuery: '',
      currentItem: [],
      targetItem: {}
    }
  },
  mounted() {
    this.loading(this.stockCurrentQuery, this.stockCurrentPage).then((res) => {
      console.log(Object.keys(this.recruitInfo))
    })
  },
}
</script>

<style scoped>
 .right {
   float: right;
   padding-right: 50px;
 }
</style>
