<template>

    <div class="filterCategory">
    <v-btn v-for="c in getAllCategory" :key="c" class="ma-6 text-orange-lighten-2">
      <span @click="filterCategory(c)">{{ c }}</span>
    </v-btn>
  </div>
    <div class="product" >


        <div class="loading" v-if="loading">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Getting your product
            </v-col>
            <v-col cols="12">
                <v-progress-linear color="deep-purple-accent-4" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </div>

        <v-col v-for="p in AllProduct" :key="p.id" v-else>
            <v-card class="mx-auto" max-width="344">
                <v-img :src="p.image" height="200px" alt="productImage"></v-img>
                <v-card-title>
                    {{ p.title }}
                </v-card-title>
                <v-card-actions>
                    <router-link :to="{ name: 'Description', params: { id: p.id } }">
                        <v-btn color="orange-lighten-2" variant="text">
                            Description
                        </v-btn>
                    </router-link>
                    <v-spacer></v-spacer>
                    <v-card-subtitle>
                        $ {{ p.price }}
                    </v-card-subtitle>
                </v-card-actions>
            </v-card>
        </v-col>
    </div>
    
    <v-divider></v-divider>
    <div class="text-center">
        <v-pagination v-model="page" :length="pageSize" rounded="circle" @click="pageination(page)"></v-pagination>
    </div>
</template>

<script setup>

import { useProductStore } from '@/store/Product'
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';

const productStore = useProductStore()

const { AllProduct, loading, page,pageSize,getAllCategory } = storeToRefs(productStore)


productStore.getProduct()
function filterCategory(data) {
  productStore.filterProductWithCategory(data)
}
const pageination=(value)=>{
productStore.getProduct(value)
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
a {
    text-decoration: none;
}

.filterCategory{
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 798px) {
  .filterCategory {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 460px) {
  .filterCategory {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}


.product {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
}
@media screen and (max-width: 1117px) {
    .product{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }
}

@media screen and (max-width: 744px) {
    .product{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    }
}
</style>