<template>
  <div class="card" 
    :class="{ 'isDisable' : isDisable}" 
    :style="{
      height: `${(windowHeight - 60) / size -16 }px`,
      width:  `${(920/size - 16 )*0.75}px `,
      perspective: `${(920/size - 16 )*1.5}px`
    }"
    >
    <div class="card__inner" :class="{'is-flipped':isFlipped}" @click="onToggle">
        <div class="card__face card--front">
            <div class="card__content" :style="{
              backgroundSize: 'contain'
            }"></div>
        </div>
        <div class="card__face card--back">
            <div class="card__content" :style="{
              backgroundImage: `url(${require('@/assets/'+ imgBackFaceURL)})
            `}"></div>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
    name: "GameCard",
    props: {
      imgBackFaceURL:{
        type: String,
        required: true
      },
      card:{
        type:[String, Number, Array, Object]
      },

      size: {
        type: Number,
        required: true
      },
    },
    data(){
      return {
        isFlipped: false,
        isDisable: false,
        windowHeight: window.innerHeight,
      };
    },
    methods: {
      onToggle(){
        if(this.isDisable) return false;
        this.isFlipped = !this.isFlipped;
        if (this.isFlipped){
          this.$emit("checkSameCard", this.card);
        }
      },

      onFlipBackCard(){
        this.isFlipped = false;
      },

      onDisable(){
        this.isDisable = true;
      }
    }
}
</script>

<style scope>
  .card{
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    width: 90px;
    height:120px;
  }

  .card.disable .card__inner{
    cursor: default;
  }
  .card__inner{
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .card__inner.is-flipped{
    transform: rotateY(-180deg);
  }

  .card__face{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.25);
    padding: 10px;
  }

  .card--front .card__content{
    background: url('../assets/images/icon_back.png') no-repeat center center;
    height: 100%;
    width: 100%;
  }

  .card--back{
    background-color: var(--light);
    transform: rotateY(-180deg);
  }

  .card--back .card__content{
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    background-position: center ;
  }
</style>