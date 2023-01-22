<template>

    <div class="product" cols="12" xs="" sm="4" md="3" lg="3" xl="2">

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
    <!-- <div class="text-center">
        <v-pagination v-model="page" :length="pagesCount" rounded="circle" prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"></v-pagination>
    </div> -->
</template>

<script setup>

import { useProductStore } from '@/store/Product'
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';


const productStore = useProductStore()

const { AllProduct,loading  } = storeToRefs(productStore)


productStore.getProduct()



</script>

<style scoped>
a {
    text-decoration: none;
}

.product {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>