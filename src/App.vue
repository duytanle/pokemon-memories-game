<template>
  <MainScreen v-if="statusMatch === 'default'" @onMatch="playGame($event)"/>
  <GameScreen v-if="statusMatch === 'match'" :cardsContext="settings.cardsContext" @onFinished="onGetResultScreen"
  @onBackMainScreen="startAgain"/>
  <ResultScreen v-if="statusMatch === 'result'" :timer="timer" @startAgain="startAgain"/>
  <FooterPage :screen="statusMatch"/>

</template>

<script>
import MainScreen from './components/MainScreen.vue'
import GameScreen from './components/GameScreen.vue';
import FooterPage from './components/FooterPage.vue';
import {mixValue} from './assets/utils/arrayMixValue.js'
import ResultScreen from './components/ResultScreen.vue';
export default {
  name: 'App',
  data(){
    return {
      statusMatch: "default",
      settings: {
        totalBlock: 0,
        cardsContext: [],
        startedAt: null,
      }, 
      timer: 0,
    }
  },
  methods: {
    playGame(size){
      this.settings.totalBlock = size * size;
      const firstCard = Array.from({ length: this.settings.totalBlock / 2}, (_, i) => i+1);
      const secondCard = [...firstCard];
      const cardArray = [...firstCard,...secondCard];
      this.settings.cardsContext = mixValue(mixValue(mixValue(cardArray)));
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },

    onGetResultScreen(){
      this.timer = Math.round((new Date().getTime() - this.settings.startedAt) / 1000 );
      this.statusMatch = 'result';
    },

    startAgain(){
      this.statusMatch = 'default';
    }

  },
  components: {
    MainScreen,
    GameScreen,
    FooterPage,
    ResultScreen
}
}
</script>

<style>

</style>
