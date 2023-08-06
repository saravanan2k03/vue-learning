<template>
  <title>Manage Landing Page</title>
  <Navbar></Navbar>
  <!-- hero section  -->
  <Hero></Hero>
  <!-- second hero section  -->
  <SecondHero></SecondHero>
  <!-- inspire -->
  <Inspire></Inspire>
  <!-- Your furniture's journey -->
  <Furniture></Furniture>
  <!-- Customize Now -->
  <CustomizeNow></CustomizeNow>
  <!-- happy customers say -->
  <HC></HC>
  <!-- Leave information -->
  <LeaveInfo></LeaveInfo>
  <!-- Need help in choosing the best? -->
  <Need></Need>

  <!-- <div class="max-w-[100%] h-[475px] bg-black  flex flex-col items-center justify-center">
    <div class="min-w-[95%]">
      <div class="border-2 border-white  h-[425px] ">
        <div class="flex p-5 justify-between">
          <div class="flex">
            <div class="h-[50px] w-[50px] bg-cover "
              style="background-image:url('https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/ll.png?alt=media&token=8a6aad6c-f255-4ebe-874c-c232e86c25c2');">
            </div>
            <div class="flex flex-col">
              <h2 class="text-start text-Textlight text-l font-medium pl-3 ">Phone Number</h2>
              <h2 class="text-start text-white text-lg font-medium pl-3 ">+91 8220761220</h2>
            </div>
          </div>
          <div class="flex">
            <div class="h-[50px] w-[50px] bg-cover "
              style="background-image:url('https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/opp.png?alt=media&token=250e639e-e484-46bc-af5b-bee30214460a');">
            </div>
            <div class="flex flex-col">
              <h2 class="text-start text-Textlight text-l font-medium pl-3 ">Email</h2>
              <h2 class="text-start text-white text-lg font-medium pl-3 ">samchris@gmail.com</h2>
            </div>
          </div>
          <div class="flex border border-gray-400 rounded ">
            <div class="mt-5 h-[10px] flex items-center">
              <input type="text" placeholder="Enter Email Address"
                class=" py-2 px-2 h-auto w-full bg-transparent border-none  hover:border-transparent">
            </div>
            <button class="bg-yellowcolr hover:bg-yellowcolr h-full  font-bold  px-12 rounded ">
              Submit
            </button>
          </div>
        </div>
        <div class="border border-white max-w-[100%] "></div>
        <div class="flex p-6 justify-between">
          <div class="flex flex-col h-[200px] w-[300px]">
            <h2 class="text-start text-Textlight text-l font-medium  ">Phone Number</h2>
            <p class="text-start text-white mt-3">Best Woods Furniture specializes in crafting high-quality, custom
              furniture
              for a variety of clients including individuals, interior designers, and commercial properties.</p>
          </div>
          <div class="flex flex-col h-[200px] w-[250px]">
            <h2 class="text-start text-Textlight text-l font-medium  ">Company</h2>
            <div class="pl-3">
              <p class="text-start text-white mt-3">-- About us</p>
              <p class="text-start text-white mt-3">-- Inspiration for you</p>
              <p class="text-start text-white mt-3">-- Blogs</p>
              <p class="text-start text-white mt-3">-- Contact us</p>
            </div>
          </div>
          <div class="flex flex-col h-[200px] w-[250px]">
            <h2 class="text-start text-Textlight text-l font-medium  ">Rooms</h2>
            <div class="pl-3">
              <p class="text-start text-white mt-3">--Bed Rooms</p>
              <p class="text-start text-white mt-3">-- Living Room</p>
              <p class="text-start text-white mt-3">-- Study Room</p>
              <p class="text-start text-white mt-3">-- Dining Room</p>
              <p class="text-start text-white mt-3">-- Store Room</p>
            </div>
          </div>
          <div class="flex flex-col h-[200px] w-[250px]">
            <h2 class="text-start text-Textlight text-l font-medium  ">Important Link</h2>
            <div class="pl-3">
              <p class="text-start text-white mt-3">-- FAQ</p>
              <p class="text-start text-white mt-3">-- Terms & Condition</p>
              <p class="text-start text-white mt-3">-- Privacy Policy</p>
              <p class="text-start text-white mt-3">-- Cookies policy</p>
              <p class="text-start text-white mt-3">-- Copyright information</p>

            </div>
          </div>
        </div>
        <div class="border border-white max-w-[100%] "></div>
        <div class="flex justify-between items-center">
          <h2 class="text-start text-Textlight text-l font-medium m-4 pt-3">Copyright © 2023 Best Woods. All rights
            reserved.</h2>
          <div class="flex">
            <h2 class="text-start text-Textlight text-l font-medium mt-4 pt-3 mr-2">Back to top</h2>
            <i class="fa-solid fa-arrow-up text-Textlight mt-4 pt-4"></i>
          </div>
          <div class="flex  w-[200px]">
            <h2 class="text-start text-Textlight text-l font-medium m-4 pt-3 pr-2">Follow us</h2>
            <div class="h-[20px] w-[100%] bg-contain mt-9"
              style="background-image:url('https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/soc.png?alt=media&token=96de8762-7d6d-4e0b-bbb8-6e76b97f0d6b');background-repeat: no-repeat;">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>



<script>
import Navbar from './Navbar'
import Hero from './Hero'
import SecondHero from './SecondHero'
import Inspire from './Inspire'
import Furniture from './Furniture.vue'
import CustomizeNow from './CustomizeNow'
import HC from './HappyCustomers.vue'
import LeaveInfo from './LeaveInfo.vue'
import Need from './Needhelp.vue'
export default {
  name: "MLP",

  components: {
    Navbar,
    Hero,
    SecondHero,
    Inspire,
    Furniture,
    CustomizeNow,
    HC,
    LeaveInfo,
    Need,
  },
};
</script>

