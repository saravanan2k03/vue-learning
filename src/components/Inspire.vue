<template>
  <div class="md:max-w-[100%]  bg-gradient-to-b from-veryLightGray md:p-9">
    <div class="md:border md:border-black h-[900px]">
      <div class="md:h-[130px]  md:flex md:justify-between md:items-center grid">
        <h1 class="md:text-center text-start text-4xl font-medium whitespace-no-wrap md:ml-3 p-6 md:p-0 ">Inspire by room</h1>
        <h3 class="text-start md:max-w-[75%] max-w-[100%] md:ml-5 pl-6 md:pl-0">Whether you're looking to make a few simple updates or
          undertake a major
          home renovation, our journal is an invaluable resource that can help you bring your home design vision to life.
          So why wait? Start exploring today and discover all the ways you can make your home the place you've always
          dreamed of.</h3>
      </div>
      <div class="md:border md:border-black md:max-w-[98%] md:mx-auto"></div>
      <div class="md:flex md:justify-evenly mt-9 grid grid-cols-3 pl-2 pr-2 md:pl-0 md:pr-0 gap-2 md:gap-0">
        <Button Name="Bedroom"></Button>
        <Button Name="Bedroom"></Button>
        <Button Name="Dining Room"></Button>
        <Button Name="Store Room"></Button>
        <Button Name="Study Room"></Button>
        <Button Name="Home Office"></Button>
      </div>       
      <div class=" max-w-[100%]  md:p-9 pt-5 ">
        <div class=" md:h-[600px] h-auto bg-cover"
          style="background-image:url('https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/WhatsApp%20Image%202023-08-02%20at%208.11.20%20PM.jpeg?alt=media&token=0f5be46c-367d-4359-871f-524b29eb2f0e');">
          <div class="flex items-center md:justify-center justify-start ml-3 md:ml-0 h-[500px]">
            <div class="md:ml-20 md:max-w-[30%] max-w-[75%] md:mx-auto">
              <div class="bg-black bg-opacity-70 border border-gray-300 p-4 rounded-lg shadow-md">
                <h3 class="text-start text-white ">Side Table</h3>
                <p class="text-start text-white">A side table is placed beside a piece of furniture a person would sit on,
                  such as a couch or a bed.</p>
                <div class="border border-white max-w-[98%] mx-auto mt-2"></div>
                <div class="flex">
                  <h3 class="text-start text-white">Find your inspiration</h3>
                  <i class="flex items-center fa-solid fa-arrow-right mt-1 ml-2 text-white"></i>
                </div>
                <div class="border border-white max-w-[50%] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from './Button'
export default {
  name: "Inspire",

  components: {
    Button,
  },
};
</script>
