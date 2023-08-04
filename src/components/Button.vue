<template>
    <button
        class="flex space-x-2 items-center bg-veryLightGray hover:bg-yellowcolr hover:shadow-xl font-bold py-2 mt-2 p-8  border border-black">
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
