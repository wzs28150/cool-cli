<template>
<div class="full">
	<el-scrollbar>
		<Header :isTop="isTop" @isNav="isNav" />
		<nuxt v-if="Nav" />
	</el-scrollbar>
</div>
</template>
<script>
import Header from '../components/header/header';
export default {
	data() {
		return {
			authname: 'wzs',
			authkey: 123,
			isTop: false,
			Nav: false
		}
	},
	components: {
		'Header': Header
	},
	methods: {
		handleScroll() {
			var scrollpage = document.querySelector( '.el-scrollbar__wrap' )
			var scrollTop = scrollpage.pageYOffset || scrollpage.scrollTop || scrollpage.scrollTop
			if ( scrollTop > 0 ) {
				this.isTop = true
			} else {
				this.isTop = false
			}
		},
		isNav( isNav ) {
			this.Nav = isNav
		}
	},
	mounted() {
		document.querySelector( '.el-scrollbar__wrap' )
			.addEventListener( 'scroll', this.handleScroll )
	}
}
</script>

<style lang="sass" scoped>

</style>
