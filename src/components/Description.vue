<template>
     <div class="loading" v-if="loading">
        <v-col
          class="text-subtitle-1 text-center"
          cols="12"
        >
          Getting your product
        </v-col>
        <v-col cols="12">
          <v-progress-linear
            color="deep-purple-accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
    </div>
    <v-card class="mx-auto" v-else>
        <!-- <v-img src="@/assets/logo.png" /> -->
        <img class="pic" :src="SingleProduct.image" alt="ProductImage">
        
        <v-card-text>
            {{ SingleProduct.title }}
            <v-spacer></v-spacer>
            {{ SingleProduct.description }}
            <v-divider></v-divider>
            <v-card-actions class="pa-4">
                Rate :
                <v-spacer></v-spacer>
                <span class="text-grey-lighten-2 text-caption mr-2">
                    ({{ rating }})
                </span>
                <v-rating v-model="rating" color="blue" half-increments hover readonly></v-rating>
            </v-card-actions>
            <v-divider></v-divider>
            $ {{ SingleProduct.price }}
            <v-btn @click="AddToCart(SingleProduct.id)">Add To
                <v-icon size="30">mdi-cart-plus</v-icon>
            </v-btn>
        </v-card-text>

    </v-card>
</template>

<script setup>
import { useProductStore } from '@/store/Product';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ref } from '@vue/reactivity';
//Description
const route = useRoute();
const ProductId = route.params.id;
const ProductData = useProductStore()
const { SingleProduct, rate,loading } = storeToRefs(ProductData)
const rating = ref(rate)
ProductData.DetailProduct(ProductId)
//End Description

//Add to cart

const AddToCart=(productId)=>{
    ProductData.AddProductToCart(ProductId)
}
</script>

<style scoped>
.v-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}
@media screen and (max-width: 767px) {
 .v-card{
    display: grid;
 }
 .v-card img {
    justify-content: center;
    align-items: center;
 }
 img{
    width: 100%;
    padding: 10px 15px 0 14px;
 }
 .v-card-actions{
    display: grid;
 }
 .text-caption{
    display: grid;
    justify-content: end;
 }
}
.v-btn {
    text-transform: none;
    display: flex;
    position: relative;
    float: right;
}

.v-card-text {
    line-height: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
}

.pic {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}

img {
    width: 700px;
    height: 500px;
}
</style>