<template>
  <div class="viewModal">
    <b-modal v-model="modalFlag" :title="companyName">
      <label>{{ title }}</label>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'viewModal',
  components: {
  },
  props: {
    item: {}
  },
  computed: {
    title () {
      if (!this.item) {
        return ''
      }
      return this.item.title
    },
    companyName () {
      if (!this.item || !this.item.company) {
        return ''
      }
      return this.item.company.name
    }
  },
  methods: {
  },
  mounted() {
  },
  data() {
    return {
      modalFlag: false
    }
  },
}
</script>
