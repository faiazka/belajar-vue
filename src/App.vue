<template>
  <div id="app" class="container mt-5">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      v-model:maximum="maximum"
      :products="products"
      :sliderStatus="sliderStatus"
      @toggle="toggleSliderStatus"
      @add="addItem"
      @delete="deleteItem"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      maximum: 20,
      products: [],
      cart: [],
      sliderStatus: false,
    };
  },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        this.products = data;
      })
      .catch((error) => console.error("Error fetching products:", error));
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0
      );
    },
    cartQty() {
      return this.cart.reduce((qty, item) => qty + item.qty, 0);
    },
  },
  methods: {
    toggleSliderStatus() {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem(product) {
      const productIndex = this.cart.findIndex(
        (item) => item.product.id === Number(product.id)
      );

      if (productIndex !== -1) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    deleteItem(key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
};
</script>
