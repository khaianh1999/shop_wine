<template>
   <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex">
      <i class="fa-solid fa-wine-bottle text-2xl text-amber-400"></i>
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Khải Anh</span>
  </a>
  <div class="flex items-center md:order-2">
       <div class="hidden relative mr-3 lg:block ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:font-semibold focus:ring-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white" placeholder="Search...">
      </div>
      <i class="fa-solid fa-bag-shopping relative text-white cursor-pointer text-xl mr-3">
        <span class="text-red text-xs absolute right-[-8px] top-[-6px] bg-slate-500 rounded-lg px-1">4</span>
      </i>
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">Giant Boy</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">khaianhaktb@gmail.com</span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Quản Trị</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Đơn Của Tôi</a>
        </li>
        <li>
          <a href="#" data-modal-toggle="login" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Đăng Nhập</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Đăng Xuất</a>
        </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-400 bg-amber-400 rounded md:bg-transparent md:text-amber-400 md:p-0 dark:text-white" aria-current="page"><!--<i class="fa-solid fa-house"></i>--> Trang chủ</a>
      </li>
      <li>
        <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:rounded hover:bg-amber-400 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><!--<i class="fa-solid fa-wine-glass"></i>--> Rượu Vang</a>
      </li>
      <li>
        <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:rounded hover:bg-amber-400 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><!--<i class="fa-solid fa-fire"></i>--> Rượu Vip</a>
      </li>
      <li>
        <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:rounded hover:bg-amber-400 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><!--<i class="fa-solid fa-gift"></i>--> Quà Tặng</a>
      </li>
      <li>
        <a href="#" class="text-base block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:rounded hover:bg-amber-400 md:hover:bg-transparent md:border-0 md:hover:text-amber-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><!--<i class="fa-solid fa-envelope-open-text"></i>--> Liên hệ</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
 
</template>

<script>
export default {
}
</script>

<style>

</style>