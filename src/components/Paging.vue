<template>
  <div class="search">
    <b-pagination
      v-model="currentPage"
      :total-rows="viewRow"
      :per-page="viewPropPerPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Paging',
  components: {
  },
  methods: {
  },
  watch: {
    currentPage (p) {
      this.$emit('pagination', p)
    }
  },
  computed: {
    viewRow () {
      if (this.propRow) {
        return this.propRow
      }
      return 0
    },
    viewPropPerPage () {
      if (this.propPerPage) {
        return this.propPerPage
      }
      return 0
    }
  },
  mounted() {
  },
  props: {
    propRow: Number,
    propPerPage: Number
  },
  data() {
    return {
      currentPage: 1
    }
  },
}
</script>
