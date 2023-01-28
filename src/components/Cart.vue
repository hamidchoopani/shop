<template>
  <v-card>
    <v-card-text>
      <div class="shopping-cart">
        <!-- Title -->
        <div class="title">
          Shopping cart
        </div>
        <!-- Product #1 -->
        <div class="titleCart">
          <span>product name</span>
          <span>count</span>
          <span>price</span>
        </div>
        <v-divider></v-divider>
        <div class="item" v-for="p in getAllProuctCart" :key="p">


          <div class="description">
            <span>product name</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button">
              <v-icon>mdi-plus</v-icon>
            </button>
            <span>{{ p.products.length }}</span>
            <button class="minus-btn" type="button" name="button">
              <v-icon>mdi-minus</v-icon>
            </button>
          </div>

          <div class="total-price">$ {{ p.id * 11 * 4 }}</div>
        </div>

        <v-divider></v-divider>
        <div class="total">
          Total: $1,188
          <v-btn color="primary">payment
            <v-icon>mdi-credit-card-multiple</v-icon>
          </v-btn>
        </div>

      </div>
    </v-card-text>
  </v-card>


</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useProductStore } from '@/store/Product';
import { storeToRefs } from 'pinia';

const ProductData = useProductStore()
const { getAllProuctCart } = storeToRefs(ProductData)
ProductData.getProductInCart()


</script>

<style scoped>
.v-btn {
  margin-left: 10px;
  padding: 10px;
}

.shopping-cart {
  width: 750px;
  height: auto;
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
  font-size: 2em;
  font-weight: 400;
  text-align: center;
}

.item {
  padding: 1.25em 1.75em;
  height: 7.5em;
  display: flex;
  justify-content: space-between;
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
  justify-content: space-evenly;
  place-items: center;
  margin-top: 15px;
}

.titleCart {
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  padding: 0 2.5rem 0 1.5rem;
  margin-bottom: 20px;
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