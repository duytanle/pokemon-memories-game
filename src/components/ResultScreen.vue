<template>
  <div class="result-screen">
    <h1 class="result__title">✨ Congratulations ✨</h1>
    <p class="result__timer">{{timer}} seconds</p>
    <button class="result__restart" @click="startAgain">Restart</button>
  </div>
</template>

<script>
export default {
    name: "ResultScreen",
    props: {
        timer: {
            type: Number,
            required: true,
        }
    },
    methods: {
      startAgain(){
        this.$emit("startAgain");
      }
    }
}
</script>

<style>
  .result-screen{
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .result__title{
    font-size: 8rem;
    color:var(--dark);
    margin-bottom: 20px;
}

  .result__timer{
    font-size: 4rem;
    margin-bottom: 20px;
    color: red;
  }

  .result__restart{
    background-color:var(--dark);
    color: white;
    padding: 10px;
    font-size:3rem;
    border-radius: 10px;
  }

  .result__restart:hover{
    background-color: white;
    color: var(--dark);
  }
</style>