<template>
  <div class="childItem body" @click="modalShow()">
    <b-card
    :title="companyName"
    :img-src="viewImage"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-button variant="success" class="buttonStyle" @click.stop="detailJump()">詳細へ</b-button>
    <b-card-text>
      {{ viewTitle }}
    </b-card-text>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ChildItem',
  components: {
  },
  props: {
    item: {},

  },
  methods: {
    detailJump: function () {
      const baseURL = 'https://www.wantedly.com/projects/'
      window.location.href = baseURL + this.getId
    },
    modalShow: function () {
      console.log('modalshow')
      this.$emit('modalItem', this.item)
    }
  },
  computed: {
    viewText () {
      if (!this.item) {
        return ''
      }
      return this.item.desription
    },
    viewTitle () {
      if (!this.item) {
        return ''
      }
      return this.item.title
    },
    viewImage () {
      // undifind用画像があればこちらに差し込む
      // あと画像のimageの種類的にsrcSetした方が良いとは思うのですが、(ロード時間のperformance云々...)
      // 今回の本質とは少しずれると思いますので、省略します
      if (!this.item) {
        return ''
      }
      return this.item.image[Object.keys(this.item.image)[0]]
    },
    getId () {
      if (!this.item) {
        return ''
      }
      return this.item.id
    },
    companyName () {
      if (!this.item) {
        return ''
      }
      return this.item.company.name
    },
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

<style scoped>
 .buttonStyle {
   position: absolute;
   opacity:0.7;
   top: 0;
   left: 0;

   text-align:center;
 }
 .body {
   width: 300px;
   height: 300px;
   cursor: pointer;
 }
</style>