<template>
  <div class="splash" v-if="splash" :class="{ 'diplay-none': !splash }">
    <h1 class="fade-in">welcome to website</h1>
  </div>
  <v-app :theme="theme">
    <v-app-bar>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon class="hamburgermenu" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <router-link :to="{ name: 'Product' }"> -->
      <v-toolbar-title>
        <v-btn variant="plain" class="text-orange logo" :to="{ name: 'Product' }">Shop</v-btn>
      </v-toolbar-title>
      <!-- </router-link> -->



      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'ContactMe' }">contact me</v-btn>

      <v-btn :to="{ name: 'Cart' }" class="cart" stacked @click="dialog = true">
        <v-badge class="text-none" :content="countProductIconHeader" color="info">
          <v-icon>mdi-cart-outline</v-icon>
          <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
        </v-badge>
      </v-btn>


      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">
        <v-tooltip activator="parent" location="bottom">change theme</v-tooltip>
      </v-btn>

      <v-btn icon class="account">
        <v-icon>mdi-account</v-icon>
        <v-tooltip activator="parent" location="bottom">Register</v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <div class="inmenu">
        <v-btn variant="text" class="accountInmenu" icon
          v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">
          <v-icon>mdi-account</v-icon>
          <v-tooltip activator="parent" location="bottom">Register</v-tooltip>
        </v-btn>

        <router-link class="contactmeInmenu" v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }"
          :to="{ name: 'ContactMe' }">
          <v-btn variant="text">contact me</v-btn>
        </router-link>

        <v-btn :to="{ name: 'Cart' }" variant="text" class="cartInmenu" stacked @click="dialog = true">
          <v-badge class="text-none" :content="countProductIconHeader" color="info">
            <v-icon>mdi-cart-outline</v-icon>
            <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
          </v-badge>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>


    <Footer />


  </v-app>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { computed, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/Product'
import cart from '@/components/Cart.vue'
import router from './router/routes';
const dialog = ref(true)
const drawer = ref(null)
const productStore = useProductStore()
const open = ref(['Users'])
const { AllProduct, getAllCategory, countProductIconHeader, getProductInCart, splash } = storeToRefs(productStore)

// splash screen
onMounted(() => {
  splashScreen()
})
function splashScreen() {
  productStore.splashTime()
}

// dark mode
const theme = ref('light')
theme.value = localStorage.getItem('theme');
let clicked = ref(false)
clicked.value = localStorage.getItem('colorIcon');
function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  clicked.value = clicked.value === false ? true : false
  localStorage.setItem('theme', theme.value);
  localStorage.setItem('colorIcon', clicked.value)
}
// end dark mode

productStore.getProduct()
productStore.getCategory()
productStore.getProductInCart()
function filterCategory(data) {
  console.log(data);
  productStore.filterProductWithCategory(data)
}


</script>

<style scoped>
/* splash screen */
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #121212ed;
  z-index: 1200;
  color: #ff98009c;
  text-align: center;
  line-height: 100vh;
}

.splash.diplay-none {
  position: fixed;
  top: 0;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: -10;
  color: white;
  text-align: center;
  line-height: 50vh;
  transition: all 1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}

/* end splash screen */
@font-face {
  font-family: custome;
  src: url('@/assets/font/samim.ttf');
}

@font-face {
  font-family: Raisahi;
  src: url('@/assets/font/BLKCHCRY.TTF');
}

* {
  font-family: custome;
}

.logo {
  font-family: Raisahi;
  font-size: 25px;
}

.mdi-instagram {
  color: #d62976;
}

@media screen and (min-width: 745px) {
  .hamburgermenu {
    display: none;
  }
}

@media screen and (max-width: 744px) {

  .contactme,
  .category,
  .cart,
  .filterbtn,
  .account {
    display: none;
  }
}

@media screen and (max-width:460px) {
  .logo {
    font-size: 15px;
  }
}

@media screen and (max-width:394px) {
  .logo {
    font-size: 15px;
    padding: 0;
  }

  .v-toolbar-title {
    margin-inline-start: 0 !important;
  }
}

@media screen and (max-width:394px) {
  .logo {
    font-size: 8px;
    padding: 0;
  }
}

.v-main {
  padding-top: 0;
}


.inmenu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.cartInmenu {
  width: 14px;
  border-radius: 50%;
}

.accountInmenu {
  width: 72px;
  height: 72px;
}

.contactmeInmenu {
  display: grid;
  align-items: center;
}

.filterbtnInmenu {
  display: grid;
  align-items: end;
}


a {
  text-decoration: none;
}

.v-dialog {
  align-items: center;
}

.closeDialog {
  display: contents;
  width: 100px;
}

.v-list-item {
  cursor: pointer;
}

.allProduct {
  cursor: pointer;
  padding: 10px 0 10px 15px;
}

.v-input {
  max-width: 10rem !important;
  height: 50px;
}

.count {
  padding-bottom: 17px;
  color: #ffb5009e;
}

.text-white {
  color: #fff;
}

.text-black {
  color: #000;
}

.v-row {
  justify-content: center;
}
</style>