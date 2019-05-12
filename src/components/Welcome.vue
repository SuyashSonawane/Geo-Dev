<template>
    <div class="welcome container">
      <div class="card ">
        <div class="card-content center-align">
          <h2 class="teal-text">Welcome <br>
          <p>Chat on a Global Chat </p> </h2>
          <form @submit.prevent="enterChat">
            <label for="name">Enter Your Name</label>
            <input type="text" name="name" class="input-name" v-model="name">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
            <button class="btn teal">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Welcome',
    data(){
      return{
        name:null,
        feedback:null
      }

    },
    methods:{
        enterChat(){
          if(this.name){
            this.feedback=null
            this.$router.push({name:'Chat' ,params: {name:this.name}})

          }else{
            this.feedback="You must enter a name"
          }
        }
    }

}
</script>

<style>
.welcome{
  max-width: 400px;
  margin-top: 100px
}
.welcome button{
  margin-top: 20px
}
.welcome h2 p{
  font-size: 0.5em
}
</style>