<template>
  <div class="right">
    <search @search="searcher"/>
    <div>
      <span class="label">最近見た求人:</span>
      <child-item v-for="(item, index) in currentItems" :key="index" :item="item" @modalItem="modalEmit"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Search from '@/components/Search.vue'
import ChildItem from '@/components/ChildItem.vue'

export default {
  name: 'Recruit',
  components: {
    Search,
    ChildItem,
  },
  methods: {
    searcher: function (searcher) {
      console.log('searchText', searcher)
      this.$emit('search', searcher)
    },
    modalEmit: function (item) {
      this.$emit('modalItem', item)
    }
  },
  props: {
    currentItems: {
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
  .right {
    width: 30%;
  }
  .label {
    display: flex;
  }
</style>