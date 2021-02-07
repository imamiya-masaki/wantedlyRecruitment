<template>
  <div class="home">
    {{ this.recruitInfo }}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Recruit',
  components: {
  },
  methods: {
    async loading(setQuery, setPaging) {
      const query = setQuery || ''
      const paging = setPaging || 1
      const baseURL = 'https://asia-northeast1-wantedly-dev.cloudfunctions.net/exam_projects'
      const targetURL = `${baseURL}?q=${query}&page=${paging}`
      this.axios.get(targetURL).then((res) => {
        this.recruitInfo = res.data
        this.status = res.status
        this.statusText = res.statusText
        console.log('statusText', res.statusText)
        console.log('keys', Object.keys(this.recruitInfo), res.status)
      })
    },
  },
  mounted() {
    this.loading().then((res) => {
      console.log(Object.keys(this.recruitInfo))
    })
  },
  data() {
    return {
      recruitInfo: {},
      status: '',
      statusText: '',
    }
  },
}
</script>
