<template>
    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Shop<span class="text-orange">logo</span></h3>
            <p class="mt-5">quick access</p>
            <p class="quickAccess mt-3">
                <v-btn variant="plain" class="text-orange" :to="{ name: 'Product' }">Home</v-btn>
                <v-btn variant="plain" class="text-orange" :to="{ name: 'AboutUs' }">About</v-btn>
                <v-btn variant="plain" class="text-orange" :to="{ name: 'ContactMe' }">Contact Me</v-btn>
            </p>
        </div>

        <div class="footer-center">

            <div>
                <i class="fa fa-map-marker"></i>
                <p>Sanandaj</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>09220000000</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com" class="text-orange">https://gloryandbeauty.netlify.app/</a></p>
            </div>
            <div class="footer-icons">
                <v-btn variant="text" @click="toTwitter" icon>
                    <img width="15" src="@/assets/icon/Twitter-logo.svg" />
                    <v-tooltip activator="parent" location="top">twitter</v-tooltip>
                </v-btn>
                <v-btn variant="text" @click="tolinkedin" icon>
                    <img width="15" src="@/assets/icon/linkedin-svgrepo-com.svg" />
                    <v-tooltip activator="parent" location="top">linkedin</v-tooltip>
                </v-btn>
                <v-btn variant="text" icon><img width="15" src="@/assets/stackoverflow.png" @click="tostackoverflow" />
                    <v-tooltip activator="parent" location="top">stackoverflow</v-tooltip>
                </v-btn>
                <router-link :to="{ name: 'ContactMe' }">
                    <v-btn icon variant="text"><img width="15" src="@/assets/gmail.png" />
                        <v-tooltip activator="parent" location="top">email</v-tooltip>
                    </v-btn>
                </router-link>
            </div>
        </div>

        <div class="footer-right">
            <p class="footer-company-about">
                <span>Technology used on the site</span>
                <v-btn icon variant="text">
                    <img width="30" src="@/assets/icon/vue-js.svg" />
                    <v-tooltip activator="parent" location="top">vue js</v-tooltip>
                </v-btn>
                <v-btn icon variant="text">
                    <img width="30" src="@/assets/icon/vuetify.svg" />
                    <v-tooltip activator="parent" location="top">vuetify</v-tooltip>
                </v-btn>
                <v-btn icon variant="text">
                    <img width="35" src="@/assets/icon/vee-validate.png" />
                    <v-tooltip activator="parent" location="top">vee-validate</v-tooltip>
                </v-btn>
                <v-btn icon variant="text">
                    <img width="25" src="@/assets/icon/pinia.svg" />
                    <v-tooltip activator="parent" location="top">pinia</v-tooltip>
                </v-btn>
                <v-btn variant="text">
                    <img width="110" src="@/assets/icon/axios.svg" />
                    <v-tooltip activator="parent" location="top">axios</v-tooltip>
                </v-btn>
                <v-btn icon variant="text">
                    <img width="30" src="@/assets/icon/fakestoreapi.png" />
                    <v-tooltip activator="parent" location="top">fakestoreapi</v-tooltip>
                </v-btn>
                <v-btn variant="text">
                    <img width="110" src="@/assets/icon/vuesweetalert.png" />
                    <v-tooltip activator="parent" location="top">sweetalert</v-tooltip>
                </v-btn>
                <v-btn icon variant="text">
                    <img width="25" src="@/assets/icon/emailjs.png" />
                    <v-tooltip activator="parent" location="top">emailjs</v-tooltip>
                </v-btn>
            </p>


        </div>
    </footer>


    <!-- <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn variant="text" class="mx-2 text-orange-lighten-2" rounded="xl" v-for="c in getAllCategory">
          <v-list-item-title @click="filterCategory(c)">{{ c }}</v-list-item-title>
        </v-btn>
        <v-col class="text-center mt-8" cols="12">
          <v-btn class="mx-4" variant="text" @click="toTwitter"><v-icon>mdi-twitter</v-icon>
            <v-tooltip activator="parent" location="top">twitter</v-tooltip>
          </v-btn>
          <v-btn class="mx-4" variant="text"><img width="15" src="@/assets/stackoverflow.png"
              @click="tostackoverflow" />
            <v-tooltip activator="parent" location="top">stackoverflow</v-tooltip>
          </v-btn>
          <router-link :to="{ name: 'ContactMe' }">
            <v-btn class="mx-4" variant="text"><img width="15" src="@/assets/gmail.png" />
              <v-tooltip activator="parent" location="top">email</v-tooltip>
            </v-btn>
          </router-link>
        </v-col>
        <v-col class="text-center mt-4" cols="12 text-orange-lighten-2">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer> -->
</template>
<script setup>
const tostackoverflow = () => {
    window.open('https://stackoverflow.com/users/12456014/hamid-choopani')
}
const toTwitter = () => {
    window.open('https://twitter.com/hamidchoopani77')
}
const tolinkedin = () => {
    window.open('https://www.linkedin.com/in/hamid-choopani-449207195')
}

</script>


<style scoped>
@font-face {
    font-family: custome;
    src: url('@/assets/font/samim.ttf');
}
* {
    font-family: custome;
}

.quickAccess a {
    padding: 0;
}

.mdi-twitter {
    color: #00acee
}

.mdi-linkedin {
    color: #0A66C2
}

.mdi-telegram {
    color: #2AABEE
}

section {
    width: 100%;
    display: inline-block;
    /* background: #333; */
    height: 50vh;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;
}

.footer-distributed {
    /* background: #666; */
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 20px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
    width: 40%;
}

/* The company logo */

.footer-distributed h3 {
    /* color:  #ffffff; */
    font: normal 36px 'Open Sans', cursive;
    margin: 0;
}



/* Footer links */

.footer-distributed .footer-links {
    /* color:  #ffffff; */
    margin: 0px 0 12px;
    padding: 0;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    /* color:  #222; */
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    /* color: #ffffff; */
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    /* color: #ffffff; */
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    text-decoration: none;
}

.footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    /* color: #fff; */
    display: inline-block;
    padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
    content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
    width: 20%;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    /* color:  #92999f; */
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    /* color:  #ffffff; */
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin: 20px 0 0 10px;
}

/* 
.footer-distributed .footer-icons a{
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color:  #33383b;
    border-radius: 2px;

    font-size: 20px;
    /* color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
} */

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

    .footer-distributed {
        font: bold 14px sans-serif;
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }

    .footer-distributed .footer-center i {
        margin-left: 0;
    }

}
</style>