<template>
    <div class="game-screen">
        <div class="game-screen__inner" 
            :style="{ width:  `${(920 / size -16)*0.75 * size + 16*size}px `}"
        >    
            <Card v-for="(card, index) in cardsContext" :key="index" :ref="`card-${index}`" :card="{index, value:card}" :imgBackFaceURL="`images/${card}.png`" @checkSameCard="checkCard($event)" :sameCard="sameCard" :size="size"/>
        </div>
        <button class="btn-game-screen--back" @click="backMainScreen">Back</button>    
    </div>
</template>

<script>
import Card from './GameCard.vue';
export default {
    name: "GameScreen",
    props: {
        cardsContext:{
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    components: { Card },
    data(props){
        return {
            sameCard: [],
            size: Math.sqrt(props.cardsContext.length)
        }
    },
    methods: {
        checkCard(cardIdentify){
            if (this.sameCard.length === 2) return false;
            this.sameCard.push(cardIdentify);
            if (this.sameCard.length === 2 && this.sameCard[0].value!==this.sameCard[1].value){
                const index0 = this.sameCard[0].index;
                const index1 = this.sameCard[1].index;
                setTimeout(() => {
                    this.$refs[`card-${index0}`][0].onFlipBackCard();
                    this.$refs[`card-${index1}`][0].onFlipBackCard();
                },800);
                this.sameCard = [];
            }
            else if (this.sameCard.length === 2 && this.sameCard[0].value===this.sameCard[1].value){
                this.$refs[`card-${this.sameCard[0].index}`][0].onDisable();
                this.$refs[`card-${this.sameCard[1].index}`][0].onDisable();
                this.sameCard = [];
                const numberOfDisable = document.querySelectorAll(".card.isDisable");
                if(numberOfDisable && numberOfDisable.length === this.cardsContext.length - 2){
                    setTimeout(() => {
                        this.$emit("onFinished");
                    }, 2000);
                }
            }
            else{
                return false;
            }
        },

        backMainScreen(){
            this.$emit("onBackMainScreen");
        }
    }
    
}
</script>

<style>
    .game-screen{
        
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        color: var(--white);
    }

    .game-screen__inner{
        display: flex;
        flex-wrap: wrap;
        margin: 16px auto;
    }

    .btn-game-screen--back{
        position:fixed;
        top: 16px;
        left: 16px;
        background-color:var(--dark);
        color: white;
        padding: 10px;
        font-size: 2rem;
        border-radius: 10px;
    }

    .btn-game-screen--back:hover{
        color: var(--dark);
        background-color: white;
    }

</style>