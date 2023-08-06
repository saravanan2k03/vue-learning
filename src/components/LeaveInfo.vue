<template>
  <div class="w-full max-w-[100%] h-auto  relative">
    <img class="absolute inset-0 h-full w-full object-fill"
      src="https://firebasestorage.googleapis.com/v0/b/angry-bird-b4b71.appspot.com/o/wall-416060_1280.jpg?alt=media&token=a368812c-7e12-4f06-9566-ade680c1e3b3"
      alt="" />
    <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
    <div class="md:flex grid h-full items-center justify-around relative">
      <div class=" md:max-w-[25%] max-w-[100%]">
        <h1 class="text-start text-4xl font-bold text-white  mt-5 ml-5">Leave information to free consultation</h1>
      </div>
      <div class="flex flex-col md:w-[40%] w-[100%] p-4">
        <h1 class="text-start text-4xl font-bold text-white  mt-5 ">Your information</h1>
        <div class="mt-5">
          <input type="text" placeholder="Your name" class="border border-gray-400 py-3 px-2 w-full bg-transparent ">
        </div>
        <div class="mt-5">
          <input type="text" placeholder="Email Address" class="border border-gray-400 py-3 px-2 w-full bg-transparent">
        </div>
        <div class="mt-5">
          <input type="text" placeholder="Phone Number" class="border border-gray-400 py-3 px-2  w-full bg-transparent">
        </div>
        <div class="mt-5">
          <h1 class="text-start text-l font-medium text-white  mb-3 ">Tell us about your choice</h1>
          <input type="text" placeholder="" class="border border-gray-400 py-5 px-2 w-full bg-transparent">
        </div>
        <div class="mt-5">
          <input type="text" placeholder="Appropriate time frame (Optional)"
            class="border border-gray-400 py-3 px-2 w-full bg-transparent">
        </div>
        <div class="flex flex-row">
          <button class="bg-yellowcolr hover:bg-yellowcolr  font-bold py-2 px-12 rounded mt-4">
            Submit
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "LeaveInfo",
};
</script>