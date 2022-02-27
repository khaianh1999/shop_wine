<template>
  <div>
    <SlideShow/>
    <NewProduct/>
    <MenuPrice/>
    <Suitable/>
    <Maybe/>
    <Testimonials />
  </div>
  
</template>

<script>
import SlideShow from '@/views/layout/SlideShow.vue'
import NewProduct from '@/views/layout/NewProduct.vue'
import MenuPrice from '@/views/layout/MenuPrice.vue'
import Suitable from '@/views/layout/Suitable.vue'
import Maybe from '@/views/layout/Maybe.vue'
import Testimonials from '@/views/layout/Testimonials.vue'


export default {
  components: { SlideShow , NewProduct , MenuPrice , Suitable , Maybe , Testimonials},

}
</script>

<style>

</style>