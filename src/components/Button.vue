<template>
    <button
        class="flex md:space-x-2 justify-center items-center bg-veryLightGray hover:bg-yellowcolr hover:shadow-xl font-bold py-2 mt-2 p-8  border border-black">
        {{Name}}
    </button>
</template>



<script>
export default {
  name: "Button",

  props: {
    Name: String,
  }
};
</script>
