<template>
  <div>
    <el-header>
      <div class="container">
        <el-row>
          <el-col :span="4">
            <div class="logo">
              COOL
            </div>
          </el-col>
          <el-col :span="20">
            <div style="float: right;">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
                <el-menu-item v-for="item in nav" :key="item.id"  :index="item.id" ><nuxt-link :to="item.url">{{item.title}}</nuxt-link></el-menu-item>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <!-- <ul>
      <li v-for="item in nav" :key="item.key">{{item.title}}</li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    nav: null,
    activeIndex : "1"
  }),
  created() {
		this.login()
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch( 'login', {
					authname: this.authname,
					authkey: this.authkey
				} )
				this.nav = this.$store.state.authnav.data
        this.$emit('isNav',true);
				this.formError = null
			} catch ( e ) {
				this.formError = e.message
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import '~assets/sass/base/header.scss';
</style>
