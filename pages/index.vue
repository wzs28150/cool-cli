<template>
  <div class="transition-container container" style="height:2000px">
    <h1>demo</h1>
    <p><nuxt-link to="/about">About page</nuxt-link></p>
    <ul>
      <li v-for="item in bannerList" :key="item.key">{{item.title}}{{aboutContent.content}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  layout: 'default',
  transition: 'slide-left',
  async asyncData({ app }) {
    const { data: { data: data } } = await app.$axios.get('/getbanner')
    const { data: { data: about } } = await app.$axios.get('/getabout')
    return {
      bannerList:data.bannerList,
      aboutContent:about.aboutContent
    }
  }
}
</script>
