<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.showFooter"/> 
</div>
</template>

<script>
import {mapActions} from "vuex"
import FooterGuide from '@/components/FooterGuide/FooterGuide';
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted() {
   // this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions (['getAddress','getUserInfo'])
  },
}
</script>

<style>


</style>
