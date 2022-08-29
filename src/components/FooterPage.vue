<template>
    <div class="footer" :style="{color: defaultColor()}">
        <p class="footer-content">This game owned by Le Duy Tan- <a href="https://github.com/duytanle" target="__blank" class="footer-link" :style="{color: defaultLinkColor()}">view here</a></p>
    </div>
</template>

<script>
export default {
    name: 'FooterPage',
    props:{
        screen: {
            type: String,
            required: true,
        }
    },
    methods: {
        defaultColor(){
            if(this.screen==='default'){
                return 'white';
            }
            else{
                return '#212121';
            }
        },
        defaultLinkColor(){
            if(this.screen==='default'){
                return '#212121';
            }
            else{
                return 'red';
            }
        }
    }
}
</script>

<style>
    .footer{
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 3rem;
        color: var(--dark);
    }

    .footer-link{
        color: var(--dark);
    }

    .footer-link:hover{
        color: rgb(211, 240, 16) !important;
    }
</style>