<template>
  <v-app :theme="theme">
    <v-app-bar>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon class="hamburgermenu" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link :to="{ name: 'Product' }">
        <v-toolbar-title v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">Shop</v-toolbar-title>
      </router-link>



      <v-spacer></v-spacer>
      <router-link class="contactme" v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }"
        :to="{ name: 'ContactMe' }">
        <v-btn>contact me</v-btn>
      </router-link>
      <!-- open-on-hover -->
      <!-- <v-menu open-on-click class="category">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="filterbtn">
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
      </v-menu> -->
      
      
      <v-btn
    >
    filter
    <v-icon size="20">mdi-chevron-down</v-icon>
      <v-menu activator="parent">
        <v-list>
          <v-list-item class="allProduct" @click="filterCategory('allProduct')"> All Product </v-list-item>
          <v-list-item v-for="c in getAllCategory" :key="c">
            <v-list-item-title @click="filterCategory(c)">{{ c }}</v-list-item-title>
          </v-list-item>
            <!-- <v-list-item-title>All Product</v-list-item-title> -->
         
        </v-list>
      </v-menu>
    </v-btn>



      <router-link :to="{ name: 'Cart' }" v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">
        <v-btn class="cart" stacked @click="dialog = true">
          <v-badge class="text-none" :content="countProductIconHeader" color="info">
            <v-icon>mdi-cart-outline</v-icon>
            <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
          </v-badge>
        </v-btn>
      </router-link>

      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">
        <v-tooltip activator="parent" location="bottom">change theme</v-tooltip>
      </v-btn>

      <!-- <router-link :to="{ name: 'AccountUser' }"> -->
      <v-btn class="account" icon v-bind:class="{ 'text-white': clicked, 'text-black': !clicked }">
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

        <v-btn variant="text" class="cartInmenu" stacked @click="dialog = true">
          <v-badge class="text-none" :content="countProductIconHeader" color="info">
            <v-icon>mdi-cart-outline</v-icon>
            <v-tooltip activator="parent" location="bottom">cart</v-tooltip>
          </v-badge>
        </v-btn>

        <!-- open-on-hover -->
        <v-menu class="categoryInmenu">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="filterbtnInmenu">
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
      </div>
    </v-navigation-drawer>
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

const drawer = ref(null)
const productStore = useProductStore()
const open=ref(['Users'])
const { AllProduct, getAllCategory, countProductIconHeader, getProductInCart, dialog } = storeToRefs(productStore)
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
  productStore.filterProductWithCategory(data)
}

const tostackoverflow = () => {
  window.open('https://stackoverflow.com/users/12456014/hamid-choopani')
}
const toTwitter = () => {
  window.open('https://twitter.com/hamidchoopani77')
}
</script>

<style scoped>
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

.mdi-twitter {
  color: #00acee
}

.mdi-linkedin {
  color: #0A66C2
}

.v-toolbar-title {
  margin-left: 10px;
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