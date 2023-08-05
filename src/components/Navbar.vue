<template>
  <nav class="p-3 pt-3">
    <div class="flex item-center justify-between">
      <i class="fas fa-bars text-black text-lg "></i>
      <div class="flex item-center justify-center">
        <h3 class="text-black text-xl font-bold items-center pl-9">Best Woods</h3>
      </div>
      <!-- Menuitem -->
      <div class="hidden md:flex space-x-6 pt-1.5">
        <i class="fa-solid fa-magnifying-glass "></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-solid fa-circle-user "></i>
        <i class="fa-solid fa-cart-shopping"></i>

      </div>
      <div class="flex space-x-6 md:hidden pb-5">
        <button class="bg-yellowcolr hover:bg-yellowcolr  font-bold py-1 px-5 rounded ">
          Login Now
        </button>
      </div>

    </div>

  </nav>
</template>


<script>
export default {
  name: "Navbar",
};
</script>