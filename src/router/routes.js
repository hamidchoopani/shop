import { createRouter, createWebHistory } from "vue-router";
import Product from '@/components/Product.vue'
import ContactMe from '@/components/ContactMe.vue'
import Description from '@/components/Description.vue'
import Cart from '@/components/Cart.vue'
  
const routes = [
  { path: "/", name: "Product", component: Product },
  { path: "/ContactMe", name: "ContactMe", component: ContactMe },
  { path: "/Description/:id", name: "Description", component: Description },
  { path: "/Cart", name: "Cart", component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },

});

export default router;
