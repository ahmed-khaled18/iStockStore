<template>
    <div class="footer-container">
        <div class="footer-iStock"><strong>iStock</strong></div>
        <div class="footer-contactinfo">
            <div>+201000 567 853</div>
            <div>contact-us@iStock.com</div>
            <div>1 Elsarayat St, Abbaseya, Cairo-Egypt</div>
        </div>
        <div class="footer-contactinfo">product</div>
        <div class="footer-contactinfo">shipping</div>
        <div class="footer-icons">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </div>
    </div>   
</template>

<script>
 export default {
    name:"Footer",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
    .footer-container{
        display: flex;
        justify-content: space-around;
        background-color: #495867;
    }
    .footer-iStock{
        color:#FE5F55;
        font-size: 62px;
        font-family: Agency FB;
        margin: auto;
    }
    .footer-contactinfo{
        color: white;
        font-family: Agency FB;
        font-size: 12px;
        margin: auto;
        font-weight: bold;
    }
    .footer-icons{
        margin: auto;
    }

</style>