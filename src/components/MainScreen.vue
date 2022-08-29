<template>
  <div class="main-screen">
    <h1 class="main-screen__title">POKE MEMORIES</h1>
    <h3 class="main-screen__subtitle">Select mode to start game</h3>
    <div class="main-screen__type-play">
        <MSTypePlay v-for="typePlay in typePlays" :key="typePlay.size" :id="typePlay.size" :chooseType=typePlay  @click="onMatch(typePlay.size)"/>
    </div>
  </div>
</template>

<script>
import MSTypePlay from './MSTypePlay.vue';

export default {
    name: "MainScreen",
    components: { MSTypePlay },
    data() {
       return {
         typePlays: [
            {
                size: 4,
                name: "Easy"
            },
            {
                size: 6,
                name: "Normal"
            },
            {
                size: 8,
                name: "Hard"
            },
            {
                size: 10,
                name: "Super Hard"
            },
        ]
       }
    },
    methods: {
        onMatch(size) {
            this.$emit("onMatch", size);
        }
    }
}
</script>

<style>
    .main-screen{
        width: 100%;
        height: 100vh;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: var(--blue);
    }

    .main-screen__title{
        font-size: 8rem;
        color: white;
        margin-bottom: 10px;
    }

    .main-screen__subtitle{
        font-size: 4rem;
        margin-bottom: 20px;
    }

    .main-screen__type-play{
        display: flex;
    }
</style>