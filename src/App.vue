<template>
  <v-app :theme="theme">
    <v-app-bar>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link :to="{ name: 'Product' }">
        <v-toolbar-title v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">Shop
          Clothing</v-toolbar-title>
      </router-link>



      <v-spacer></v-spacer>
      <router-link v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }" :to="{name:'ContactMe'}">
        <v-btn >contact us</v-btn>
      </router-link>
      
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            filter
            <v-icon size="20">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-title class="allProduct" @click="filterCategory('allProduct')">All Product</v-list-item-title>
          <v-list-item v-for="c in getAllCategory" :key="c">
            <v-list-item-title @click="filterCategory(c)">{{ c }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn stacked @click="dialog = true">

        <v-badge class="text-none" :content="countProductIconHeader" color="info">
          <v-icon>mdi-cart-outline</v-icon>
          <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
        </v-badge>
        <!-- <v-icon @click="dialog = true">mdi-cart</v-icon>
        <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
        <span class="count">0</span> -->
      </v-btn>

      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">
        <v-tooltip activator="parent" location="bottom">change theme</v-tooltip>
      </v-btn>

      <!-- <router-link :to="{ name: 'AccountUser' }"> -->
      <v-btn icon v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">
        <v-icon>mdi-account</v-icon>
        <v-tooltip activator="parent" location="bottom">Register</v-tooltip>
      </v-btn>
      <!-- </router-link> -->
    </v-app-bar>

    <!-- <v-dialog v-model="dialog">
      <v-btn class="closeDialog" variant="text" @click="dialog = false">
        <v-icon size="50">mdi-window-close</v-icon>
      </v-btn>
      <cart />
    </v-dialog> -->
    <v-main>
      <v-container>
        <v-row>
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>

    <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn variant="text" class="mx-2" rounded="xl" v-for="c in getAllCategory">
          <v-list-item-title @click="filterCategory(c)">{{ c }}</v-list-item-title>
        </v-btn>
        <v-col class="text-center mt-8" cols="12">
          <v-btn class="mx-4" variant="text"><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn class="mx-4" variant="text"><img width="15" src="@/assets/stackoverflow.png" @click="tostackoverflow"/>
            <v-tooltip activator="parent" location="top">Register</v-tooltip>
          </v-btn>
          <router-link :to="{name:'ContactMe'}">
            <v-btn class="mx-4" variant="text"><img width="15" src="@/assets/gmail.png" /></v-btn>
          </router-link>
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import Product from '@/components/Product.vue'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/Product'
import cart from '@/components/Cart.vue'
import router from './router/routes';
// dark mode
const theme = ref('light')
theme.value = localStorage.getItem('theme');
let clicked = ref(false)
clicked.value = localStorage.getItem('colorIcon');
const dialog = ref(false)
function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  clicked.value = clicked.value === false ? true : false
  localStorage.setItem('theme', theme.value);
  localStorage.setItem('colorIcon', clicked.value)
}
// end dark mode


const productStore = useProductStore()

const { AllProduct, getAllCategory, countProductIconHeader, getProductInCart } = storeToRefs(productStore)


productStore.getProduct()
productStore.getCategory()
productStore.getProductInCart()
function filterCategory(data) {
  productStore.filterProductWithCategory(data)
}

const tostackoverflow=()=>{
  window.open('https://stackoverflow.com/users/12456014/hamid-choopani')
}

</script>

<style scoped>
.mdi-instagram {
  color: #d62976;
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