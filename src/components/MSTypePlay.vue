<template>
    <div class="type-play">
        <span class="type-play__size">{{chooseType.size}} x {{chooseType.size}}</span>
        <span class="type-play__name">{{chooseType.name}}</span>
    </div>
    
</template>

<script>
export default {
    name: "MSTypePlay",
    props: {
        chooseType: {
            size: Number,
            name: String
        }
    },
    data(){
        return {
            block: Math.pow((this.chooseType.size),2)
        };
    },
  
}
</script>
   
<style>
    .type-play{
       padding: 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       border: 1px solid white;
       margin-right: 20px;
       min-width: 145px;
       border-radius: 20px;
       background-color: white;
       cursor: pointer;
       box-shadow: 5px 10px 20px rgba(0,0,0,0.5);
    }
    .type-play:hover{
        background-color: var(--dark);
        border-color: var(--dark);
        color: white;
    }
    .type-play__size{
        font-size: 4rem;
        margin-bottom: 10px;
    }

    .type-play__name{
        font-size: 3rem;
    }


</style>