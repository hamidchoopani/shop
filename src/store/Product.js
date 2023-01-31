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
        // productLenght: 1,
        //cart
        getAllProuctCart: '',
        // totalProductInCart:0

        //pagination
        page: 1, //صفحه ی پیش فرض
        pageSize: 4, //تعداد محصولات برای نمایش
        listToShow: '',

        //for color icon
        // dialog:false
    }),
    getters: {

    },
    actions: {
        getProduct() {
            axios('https://fakestoreapi.com/products')
                .then(res => {
                    if (res.status === 200) {
                        this.AllProduct = res.data.slice((this.page - 1)* this.pageSize , (this.page) * this.pageSize);
                        // console.log(res.data);
                        // this.listToShow = this.AllProduct.slice((this.page - 1) , (this.page) * this.pageSize);
                        this.SingleProduct = '';
                        this.loading = false;
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
                this.page=1
                return this.AllProduct = this.getProduct()
            }
            console.log(category);
            if (category.length > 0) {
                this.loading = true
                await axios(`https://fakestoreapi.com/products/category/${category}`)
                    .then(res => {
                        if (res.status === 200) {
                            this.AllProduct = res.data
                            this.loading = false
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
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
    }
})
