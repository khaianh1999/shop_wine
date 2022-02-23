<template>
    <div class="md:py-9 py-7">
        <h2 class="text-center text-3xl font-semibold uppercase">Sản phẩm mới nhất</h2>
        <div class="container flex flex-wrap justify-between items-center mx-auto pt-6">
            <div class="lg:w-3/6 p-4 relative lg:h-[450px] lg:max-h-[450px] wow fadeInUp" data-wow-duration="1s">
                <a href="#" class="inline-block w-full h-full">
                    <img class="lg:h-full lg:max-h-full w-full rounded" src="https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?cs=srgb&dl=pexels-ray-piedra-1545529.jpg&fm=jpg" alt="">
                </a>
                <span class="inline-block text-amber-400 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:transform-none text-2xl lg:top-[200px] lg:left-[100px] md:text-3xl font-bold">Rượu Vang Thượng Hạng</span>
                <button class="inline-block py-2 px-4 text-xl top-[190px] md:top-2/3 left-1/2 translate-x-[-50%] lg:transform-none font-bold text-gray-100 rounded absolute bg-amber-500 hover:bg-amber-600 top-[140px] lg:top-[260px] lg:left-[100px]">Xem thêm</button>
            </div>
            <div class="lg:w-3/6 lg:h-[450px] p-4">
                <div class="w-full mb-[32px] lg:h-[193px] lg:max-h-[193px] relative wow fadeInRight" data-wow-duration="1.5s">
                    <a href="#" class="inline-block w-full h-full">
                    <img class="lg:h-full w-full rounded" src="https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?cs=srgb&dl=pexels-ray-piedra-1545529.jpg&fm=jpg" alt="">
                    </a>
                    <span class="inline-block text-amber-400 md:text-3xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:transform-none absolute lg:top-[70px] lg:left-[60px] font-bold lg:text-2xl text-2xl">Rượu Vang Đặc Biệt</span>
                    <button class="inline-block py-2 px-4  top-[190px] left-1/2 md:top-2/3 translate-x-[-50%] lg:transform-none lg:py-1 lg:px-2 text-xl font-bold text-gray-100 rounded absolute bg-amber-500 hover:bg-amber-600 lg:top-[110px] lg:left-[60px]">Xem thêm</button>
                </div>

                 <div class="w-full lg:h-[193px] lg:max-h-[193px] relative wow fadeInRight" data-wow-duration="2s">
                    <a href="#" class="inline-block w-full h-full">
                    <img class="lg:h-full w-full rounded" src="https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?cs=srgb&dl=pexels-ray-piedra-1545529.jpg&fm=jpg" alt="">
                    </a>
                    <span class="inline-block text-amber-400 md:text-3xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:transform-none absolute lg:top-[70px] lg:left-[60px] font-bold lg:text-2xl text-2xl">Rượu Vang Đặc Biệt</span>
                    <button class="inline-block py-2 px-4  top-[190px] left-1/2 md:top-2/3 translate-x-[-50%] lg:transform-none lg:py-1 lg:px-2 text-xl font-bold text-gray-100 rounded absolute bg-amber-500 hover:bg-amber-600 lg:top-[110px] lg:left-[60px]">Xem thêm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "NewProduct",
}
</script>

<style>

</style>