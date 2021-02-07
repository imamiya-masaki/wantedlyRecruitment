<template>
  <div class="search">
    <b-col sm="9">
      <input v-model="searchText" placeholder="キーワードで検索" @keyup.enter="searchFunc()"/>
    </b-col>
      <label>{{ viewText }}</label>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Search',
  components: {
  },
  methods: {
    searchFunc: function () {
      this.$emit('search', this.searchText)
      this.text = this.searchText
      if (this.searchText.length > 0) {
        this.serachFlag = true
      } else {
        this.serachFlag = false
      }
    },
  },
  computed: {
    viewText() {
      if (this.text.length > 0 && this.serachFlag) {
        return this.text + 'で検索中'
      }
      return ''
    }
  },
  mounted() {

  },
  data() {
    return {
      searchText: '',
      text: '',
      serachFlag: false,
    }
  },
}
</script>
