<template>
  <div class="viewModal">
    <b-modal
    v-model="modalFlag"
    :title="companyName"
    ok-only
    ok-title="詳細へ"
    size="lg"
    hide-header-close
    @ok="detailJump()"
    ok-variant="success">
      <div class="modalInfo">
        <label class="title">{{ title }}</label><br/>
        <span class="descriptionTitle"> 説明:</span>
        <div class="description"> {{ description }}</div>
      </div>
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
    description () {
      if (!this.item || !this.item.description) {
        return ''
      }
      return this.item.description
    },
    companyName () {
      if (!this.item || !this.item.company) {
        return ''
      }
      return this.item.company.name
    },
    modalClass () {
      const modalClass = {}
      modalClass.width = 'width: 150%;'
      return modalClass
    },
    getId () {
      if (!this.item) {
        return ''
      }
      return this.item.id
    },
  },
  methods: {
    detailJump: function () {
      const baseURL = 'https://www.wantedly.com/projects/'
      window.location.href = baseURL + this.getId
    }
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

<style scoped>
 .description {
   height: 300px;
   overflow-y: auto;
   border: solid 0.5px #706f6f;
   white-space: pre-wrap;
   word-wrap:break-word;
 }
 .viewModal {
   width: 150%;
   height: 100%;
 }
 .title {
   padding-top: 10px;
   padding-bottom: 10px;
   text-align: center;
 }
 .modalInfo {
   display: block;
 }
</style>