<template>
  <div>
    <ul>
      <li v-for="item in nav" :key="item.key"><nuxt-link :to="item.url">{{item.title}}</nuxt-link></li>
    </ul>
    <nuxt v-if="nav"/>
  </div>
</template>
<script>

export default {
  data(){
    return{
      authname:'wzs',
      authkey:123,
      nav:null
    }
  },
  created() {
    this.login()
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          authname: this.authname,
          authkey: this.authkey
        })
        this.nav=this.$store.state.authnav.data
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
