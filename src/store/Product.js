import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
export const useProductStore = defineStore('productStore', {
    state: () => ({
        AllProduct: '',
        SingleProduct: '',
        rate: null,
        getAllCategory: [],
        loading: true,
        countProductIconHeader: 0,
        productLenght: 1,
        //cart
        getAllProuctCart: '',
        productCountInCart: 1,
        // totalProductInCart:0

        //pagination
        page: 1, //صفحه ی پیش فرض
        pageSize: 4, //تعداد محصولات برای نمایش
        pagesCount: 0,
        listToShow: ''

    }),
    getters: {

    },
    actions: {
        getProduct() {
            axios('https://fakestoreapi.com/products')
                .then(res => {
                    if (res.status === 200) {
                        this.AllProduct = res.data;
                        this.SingleProduct = '';
                        this.loading = false;

                        // this.pagesCount = Math.ceil(res.data.length / this.pageSize);
                        // this.listToShow = res.data.slice((this.page - 1) * this.pageSize, (this.page) * this.pageSize)
                    }
                }).catch(function (error) {
                    console.log(error);
                })
        },
        async DetailProduct(id) {
            if (id > 0) {
                this.loading = true
                await axios(`https://fakestoreapi.com/products/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            this.SingleProduct = res.data
                            this.rate = res.data.rating.rate
                            this.loading = false
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        },
        getCategory() {
            axios('https://fakestoreapi.com/products/categories')
                .then(res => {
                    if (res.status === 200) {
                        this.getAllCategory = res.data
                    }
                }).catch(function (error) {
                    console.log(error);
                })
        },
        async filterProductWithCategory(category) {
            if (category == 'allProduct') {
                this.loading = true
                return this.AllProduct = this.getProduct()
            }
            if (category.length > 0) {
                this.loading = true
                await axios(`https://fakestoreapi.com/products/category/${category}`)
                    .then(res => {
                        if (res.status === 200) {
                            this.AllProduct = res.data
                            this.loading = false
                            console.log(res.data);
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        },

        //shoping cart  8091  8179
        // 09186554426

        productCount(count) {
            if (count === 'Increase') {
                this.productCountInCart++
            }
            if (count === 'Decrease') {
                if (this.productCountInCart == 0) {
                    this.productCountInCart = 0
                } else {
                    this.productCountInCart--
                }
            }
        },

        getProductInCart() {
            axios('https://fakestoreapi.com/carts')
                .then(res => {
                    this.getAllProuctCart = res.data
                    this.countProductIconHeader = res.data.length
                })
        },
        AddProductToCart(productId) {
            axios.post('https://fakestoreapi.com/carts', {
                body: JSON.stringify(
                    {
                        userId: 1,
                        date: Date.now,
                        products: [{ productId: productId, quantity: this.productCountInCart }]
                    },
                    this.countProductIconHeader++
                )
            })
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: 'add product to cart success',
                    })
                })
        },
        clearProductInCart(productId) {
            axios.delete(`https://fakestoreapi.com/carts/` + productId)
                .then(res => {

                    console.log(res);
                })
        }
    }
})
