<template>
    <div id="Suitable" class="w-full py-9 bg-gray-100">
        <h2 class="text-center text-3xl font-semibold uppercase">Hương vị dành cho bạn</h2>
        <span class="text-gray-500 text-xl pt-4 block">Có gì bất ngờ ở đây</span>
        <div class="suitable_slide container p-4 flex flex-wrap justify-between items-center mx-auto">
            <div class="owl-carousel owl-theme">
                <div class="item rounded-lg overflow-hidden border border-gray-200 shadow-md group">
                    <div class="max-w-sm bg-white">
                        <a href="#" class="relative overflow-hidden bg-no-repeat bg-cover block">
                            <img class="inline-block mx-auto group-hover:scale-110 transition duration-300 ease-in-out" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" alt="" />
                        </a>
                        <div class="p-5 bg-gray-200 text-left">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far...</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-sm text-center text-white font-bold bg-amber-500 rounded-lg hover:shadow-md hover:shadow-gray-500 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Xem thêm
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="Suitable_intro" class="container p-4 flex flex-wrap justify-between items-center mx-auto">
            <div class="bg-amber-900 rounded p-8 md:w-2/4 text-left lg:h-[500px]">
                <h3 class="uppercase text-white font-bold pb-4">tạo hương vị đặc biệt cho ly rượu</h3>
                <p class="text-white font-medium">Chúng tôi muốn bạn tự tạo cho chính bản thân mình hương vị theo ý thích. Đó là bản chất cơ bản nhất để có những tách cà phê thơm ngon nhất.</p>
                <a href="#" class="rounded-lg border-2 border-white text-white inline-block p-2 font-bold text-lg mt-4">Khám phá thêm menu</a>
            </div>
            <div class="w-full mt-2 md:w-2/4 md:mt-0 lg:p-6 lg:pr-0">
                <div class="owl-carousel owl-theme">
                    <div class="item w-full">
                        <a href="#">
                            <img class="!w-full lg:h-[400px] rounded object-cover object-center" src="https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?cs=srgb&dl=pexels-ray-piedra-1545529.jpg&fm=jpg" alt="">
                        </a>
                    </div>
                   
                </div> 
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name : "Suitable",
}


$(document).ready(function() {
    $('.suitable_slide .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dot:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('#Suitable_intro .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dot:true,
    responsive:{
        0:{
            items:1
        },
    }
})
});
</script>

<style>

</style>