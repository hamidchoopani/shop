<template>
  <v-card>
    <v-card-text>
      <div class="shopping-cart">
        <!-- Title -->
        <div class="title">
          Shopping Bag
        </div>
        <!-- Product #1 -->

        <div class="item" v-for="p in getAllProuctCart" :key="p">
          <div class="buttons" @click="clearCart(p.id)">
            <span class="delete-btn">
              <v-icon size="30">mdi-window-close</v-icon>
            </span>
          </div>

          <div class="image">
            <img src="https://designmodo.com/demo/shopping-cart/item-1.png" alt="" />
          </div>

          <div class="description">
            <span>product {{p.id}}</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button" @click="IncreaseNumberProducts">
              <v-icon>mdi-plus</v-icon>
            </button>
            <span>{{ count }}</span>
            <button class="minus-btn" type="button" name="button" @click="ReduceNumberProducts">
              <v-icon>mdi-minus</v-icon>
            </button>
          </div>

          <div class="total-price">$ 45</div>
        </div>
        
        <div class="total">
          <v-btn @click="clearCart(p.id)" color="error">clear cart
            <v-icon>mdi-delete-empty</v-icon>
          </v-btn>
          Total: $450
          <v-btn color="primary">payment
            <v-icon>mdi-credit-card-multiple</v-icon>
          </v-btn>
        </div>
        <v-divider></v-divider>

      </div>
    </v-card-text>
  </v-card>


</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useProductStore } from '@/store/Product';
import { storeToRefs } from 'pinia';

const ProductData = useProductStore()
const { productCountInCart, getAllProuctCart } = storeToRefs(ProductData)
ProductData.getProductInCart()
const count = ref(productCountInCart)
console.log(getAllProuctCart.value);
// const totalProduct=ref()
const IncreaseNumberProducts = () => {
  ProductData.productCount('Increase')
}
const ReduceNumberProducts = () => {
  ProductData.productCount('Decrease')
}
const clearCart = (productId) => {
  ProductData.clearProductInCart(productId)
}
</script>

<style scoped>
.v-btn {
  margin-left: 10px;
  padding: 10px;
}

.shopping-cart {
  width: 750px;
  height: auto;
  margin: 5em auto;
  /* background: #fff; */
  /* box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5em;

  display: flex;
  flex-direction: column;
}

/* item styling */
.title {
  height: 3.75em;
  /* border-bottom: 1px solid #e1e8ee; */
  padding: 1.25em 1.75em;
  /* color: #5e6977; */
  font-size: 1.125em;
  font-weight: 400;
}

.item {
  padding: 1.25em 1.75em;
  height: 7.5em;
  display: flex;
}



.buttons {
  position: relative;
  padding-top: 1.75em;
  margin-right: 3.5em;
}

.delete-btn,
.like-btn {
  display: inline-block;
  cursor: pointer;
}


.is-active {
  animation-name: animate;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    background-position: left;
  }

  50% {
    background-position: right;
  }

  100% {
    background-position: right;
  }
}

.image {
  margin-right: 50px;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 1em;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}

.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  /* color: #121313; */
}

.quantity {
  padding-top: 20px;
  margin-right: 60px;
}

.quantity input {
  appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 1em;
  /* color: #43484d; */
  font-weight: 300;
}



.minus-btn img {
  margin-bottom: 3px;
}

.plus-btn img {
  margin-top: 2px;
}

button:focus,
input:focus {
  outline: 0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 1em;
  /* color: #43484d; */
  font-weight: 300;
}

.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
}

/* media queries */
@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image img {
    width: 50%;
  }

  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }

  .buttons {
    margin-right: 20px;
  }
}
</style>