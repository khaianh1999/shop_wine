<template>
  <div>
    <SlideShow/>
    <NewProduct/>
    <MenuPrice/>
    <Suitable/>
  </div>
  
</template>

<script>
import SlideShow from '@/views/layout/SlideShow.vue'
import NewProduct from '@/views/layout/NewProduct.vue'
import MenuPrice from '@/views/layout/MenuPrice.vue'
import Suitable from '@/views/layout/Suitable.vue'


export default {
  components: { SlideShow , NewProduct , MenuPrice , Suitable },

}
</script>

<style>

</style>