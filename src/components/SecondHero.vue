<template>
    <div class="md:flex grid">
        <div class="h-[700px] md:w-[50%]  w-[100-px] bg-cover order-2 "
            style="background-image:url('https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/WhatsApp%20Image%202023-08-02%20at%202.28.59%20PM.jpeg?alt=media&token=d157f3a4-9b86-4b3e-8270-c45aec7b4ef3');">
        </div>
        <div class="flex flex-col  justify-center items-start bg-veryLightGray md:w-[50%] bg-gradient-to-l md:order-2 ">
            <h1 class=" md:text-start text-4xl md:max-w-[50%] font-medium mt-2 max-w-[75%] md:p-0 p-4">The timeless luxury of custom design</h1>
            <h2 class="text-start  md:max-w-[80%] mt-2 md:pl-0 pl-4">Best Woods Furniture specializes in crafting high-quality, custom
                furniture
                for
                a variety of clients including individuals, interior designers, and commercial properties. We offer
                full-service
                manufacturing and design services to bring your vision to life.</h2>
            <div class="md:pl-0 pl-4">
                <button  @click=""
                class="flex space-x-2 items-center bg-yellowcolr hover:bg-veryLightGray font-bold py-2 px-5 rounded mt-2 ">
                Our Story
                <i class="fa-solid fa-arrow-right mt-1 ml-2"></i>
            </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "SecondHero",
};
</script>