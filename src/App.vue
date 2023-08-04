<template>
  <MLP></MLP>
</template>

<script>
import MLP from './components/LandingPage'
export default {
  name: 'App',
  components: {
    // HelloWorld
    MLP,
  },

  // data() {
  //   return {

  //   }
  // },

  // methods: {
  //   deleteTask(id) {
  //    if(confirm("Are you sure you want to delete")){
  //     this.tasks = this.tasks.filter((task)=>task.id !== id)
  //    }
  //   },
  //   togglereminder(id){
  //     this.tasks = this.tasks.map((task)=>task.id == id ? { ...task,reminder:!task.reminder}:task)
  //   },
  // },
  // created() {
  //   this.tasks = [
  //     {
  //       id: 1,
  //       text: 'Doctor Appointment',
  //       day: 'March 3rd at 1:30PM',
  //       remainder: true,

  //     },
  //     {
  //       id: 2,
  //       text: 'Meeting at school',
  //       day: 'March 3rd at 1:30PM',
  //       remainder: true,
  //     },

  //     {
  //       id: 3,
  //       text: 'Meeting at school',
  //       day: 'March 3rd at 1:30PM',
  //       remainder: false,
  //     }
  //   ]
  // }
}
</script>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style> -->
