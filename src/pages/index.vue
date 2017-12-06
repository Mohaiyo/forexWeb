<template>
  <div class="hello">
    <headNav />
    <router-view></router-view>
    <footBox />
  </div>
</template>

<script>
import headNav from 'components/header/headNav.vue'
import footBox from 'components/footer/footer.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headNav,
    footBox
  }
}
</script>