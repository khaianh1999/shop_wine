<template>
  <div id="login" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                <form class="p-2 md:p-9">
                <h1 class="text-center text-4xl text-amber-400 font-bold mb-5">Đăng Nhập</h1>
                <div class="mb-2">
                    <label for="email" class="text-left block mb-2 text-base font-bold text-amber-400 dark:text-gray-300">Nhập email hoặc số điện thoại <span class="text-red">*</span></label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400" placeholder="name@flowbite.com" required>
                </div>
                <div class="mb-2">
                    <label for="password" class="text-left block mb-2 text-base font-bold text-amber-400 dark:text-gray-300">Nhập mật khẩu <span class="text-red">*</span></label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400" required>
                </div>
                <div class="flex items-center mb-6 cursor-pointer">
                    <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-amber-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-400 dark:ring-offset-gray-800" required>
                    </div>
                    <div class="ml-3 text-sm">
                    <label for="remember" class="font-medium text-amber-400 dark:text-gray-300 text-base font-bold">Ghi nhớ</label>
                    </div>
                </div>
                <div class="flex items-start mb-6 justify-around">
                      <button type="button" class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-base sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-500">Đăng Nhập</button>
                      <button type="button" data-modal-toggle="signup" class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-base sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-500">Đăng Ký</button>
                </div>
              
                </form>  
               
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>