<template>
  <div class="flex flex-col h-auto  max-w-[100%]">
    <div class="flex justify-center ">
      <h2 class="text-center text-4xl font-bold text-black md:max-w-[30%] max-w-[100%] pt-10 mt-10">Hear what our happy
        customers say</h2>
    </div>
    <div class="md:flex md:flex-row grid justify-between md:p-6 md:ml-5">
      <Customercards first="You stunned right? we see
                  your happy face" second="upload your inspiration with us and define your needs like
                  comfort, materials & colors, etc., and get your quote range." Name="Jeevan Raj" loc="Mumbai">
      </Customercards>
      <Customercards first="You stunned right? we see
                  your happy face" second="upload your inspiration with us and define your needs like
                  comfort, materials & colors, etc., and get your quote range." Name="Rahul" loc="Mumbai">
      </Customercards>
      <Customercards first="You stunned right? we see
                  your happy face" second="upload your inspiration with us and define your needs like
                  comfort, materials & colors, etc., and get your quote range." Name="Karthick" loc="Mumbai">
      </Customercards>
      <!-- End of repeated block -->
    </div>
  </div>
</template>


<script>
import Customercards from './CustomerCards.vue'
export default {
  name: "HC",

  components: {
    Customercards,
  },
};
</script>