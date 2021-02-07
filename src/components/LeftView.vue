<template>
  <div class="leftView">
    <paging :propPerPage="perPage" :propRow="row" @pagination="pageEmit" class="pagination"/>
    <div v-if="this.items" class="mainView">
      <b-col  rows="3" v-for="(item, index) of viewItems" :key="index" class="flex">
        <div v-for="(childItem, childIndex) of item" :key="childIndex" class="">
          <child-item :item="childItem" class="boxSize" @modalItem="modalEmit"/>
        </div>
     </b-col>
    </div>
    <div v-else>
      表示できる求人がありません。
    </div>
    </div>
</template>

<script>
// @ is an alias to /srcd
import ChildItem from '@/components/ChildItem.vue'
import Paging from '@/components/Paging.vue'

export default {
  name: 'leftView',
  components: {
    ChildItem,
    Paging
  },
  props: {
    items: {},
    row: {},
    perPage: {},
  },
  computed: {
    viewItems () {
      const threeArray = [[], [], []]
      console.log('items', this.items)
      if (!this.items) {
        return []
      }
      for (let i = 0; i < this.items.length; i += 1) {
        threeArray[(i % 3)].push(this.items[i])
      }
      let nextArray = []
      for (let i = 0; ; i += 1) {
        let next = []
        let flag = false
        for (let j = 0; j < 3; j += 1) {
          if (threeArray[j].length <= i) {
            break
          }
          flag = true
          next.push(threeArray[j][i])
        }
        if (!flag) {
          break
        }
        nextArray.push(next)
      }
      console.log('nextArray', nextArray)
      return nextArray
    }
  },
  methods: {
    pageEmit: function (p) {
      this.$emit('pagination', p)
    },
    modalEmit: function (item) {
      this.$emit('modalItem', item)
    }
  },
  mounted() {
  },
  data() {
    return {
    }
  },
}
</script>

<style  scoped>
 .block {
   display: block;
 }
 .flex {
   display: flex;
 }
  .boxSize {
    padding: 5px;
 }
 .leftView {
  display: block;
   width: 70%;
 }
 .mainView {
   padding-top: 30px;
 }
 .pagination {
   float: left;
   padding-left: 100px;
 }
</style>
