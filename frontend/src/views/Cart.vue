<template>
	<div class="Cart-body ">
		<NavigationBar />
		<v-divider></v-divider>
		<div class="ShoppingCart_Text">Shopping Cart</div>
		<div class="cart_Grid_Header">
			<div class="myCart_Text">My Cart</div>
			<div class="my-2 grey--text">Price</div>
		</div>
		<v-divider></v-divider>
		<div
			class="cart_Grid"
			v-for="item in $store.state.auth.cart_items"
			:key="item._id"
		>
			<div class="cart_Grid_item">
				<v-img
					:src="item.imageUrl"
					class="white--text align-end"
					max-width="250px"
				></v-img>
				<div class="middle_column">
					<div class="text-h6">{{ item.name }}</div>
					<div class="text-subtitle-1 item_Describtion">{{ item.description }}</div>
					<div class="text-subtitle-1  item_Quantity">Qty: {{ item.quantity }}</div>
					<div class="delete_item" @click="deleteItem(item)">
						Delete
					</div>
				</div>
				<div class="text-subtitle-1">{{ item.price }} EGP</div>
			</div>
			<v-divider class="items_divider"></v-divider>
		</div>
		<div class="text-h4" v-if="$store.state.auth.cart_items.length == 0">
			No Items in Cart
		</div>
		<div class="total_price_and_Checkout_Conatiner" v-else>
			<div>Subtotal {{ $store.state.auth.order_total }}</div>
			<v-btn
				elevation="0"
				class="button1 checkout_Button"
				@click="ckeckoutOrder()"
			>
				Proceed to Checkout
			</v-btn>
		</div>
	</div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import axios from "axios";
export default {
	components: {
		NavigationBar,
	},
	data() {
		return {};
	},
	methods: {
		deleteItem: async function(item) {
			let itemIndex = this.$store.state.auth.cart_items.findIndex(
				(i) => i._id == item._id
			);
			this.$store.state.auth.cart_items.splice(itemIndex, 1);
			this.$store.state.auth.order_total -= item.price * item.quantity;
			await axios.post("http://localhost:3000/api/cart/addcart", {
				products: this.$store.state.auth.cart_items,
				order_total: this.$store.state.auth.order_total,
				user_id: this.$store.state.auth.user_id,
			})
			.then(
				(response) => {
					if (response.status == 200) {
						// console.log(response)
					}
				},
				(error) => {
					if (error.response.status == 400) {
						// console.log(error)
					}
				}
			);
		},
		ckeckoutOrder: async function() {
			await axios
				.post("http://localhost:3000/api/cart/addcart", {
					products: this.$store.state.auth.cart_items,
					order_total: this.$store.state.auth.order_total,
					user_id: this.$store.state.auth.user_id,
				})
				.then(
					(response) => {
						if (response.status == 200) {
							// console.log(response)
						}
					},
					(error) => {
						if (error.response.status == 400) {
							// console.log(error)
						}
					}
				);
		},
		fetchCart: async function() {
			await axios.post("http://localhost:3000/api/cart/", {
				user_id: this.$store.state.auth.user_id,
			})
			.then(
				(response) => {
					if (response.status == 200) {
						let temp = 	response.data[1];				
						temp.forEach((product, index) => {
							product.quantity = response.data[0].products[index].quantity
						});
						this.$store.state.auth.cart_items = temp;
						this.$store.state.auth.order_total = response.data[0].order_total
					}
				},
				(error) => {
					if (error.response.status == 400) {
						// console.log(error)
					}
				}
			);
		},
	},
	mounted: function() {
		this.fetchCart();
	},
};
</script>

<style scoped>
.Cart-body {
	background-color: #f7f7ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
}

.v-divider {
	border-width: 1px !important;
	background-color: rgb(144, 144, 161) !important;
	border-color: rgb(144, 144, 161) !important;
	height: 100%;
	width: 93%;
}

.Cart-body {
	background-color: #f7f7ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
}

.ShoppingCart_Text {
	margin-top: 32px;
	text-align: center;
	font-size: 29px;
	font-weight: 1000;
	color: rgb(71, 89, 103) !important;
}
.myCart_Text {
	text-align: center;
	font-size: 27px;
	font-weight: 600;
	color: rgb(71, 89, 103) !important;
}
.cart_Grid_Header {
	width: 93%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.cart_Grid {
	width: 93%;
}

.cart_Grid_item {
	padding: 20px 0px 20px 0px;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	flex-basis: 3;
}

.items_divider {
	width: 100% !important;
}

.middle_column {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 70%;
	margin-left: 40px;
}

.delete_item {
	color: rgb(71, 89, 103);
	margin-top: 10px;
	font-size: 15px;
}

.delete_item:hover {
	color: rgb(17, 26, 32);
	cursor: pointer;
	width: fit-content;
}

.button1 {
	text-transform: none !important;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
	font-size: 18px !important;
	background-color: transparent !important;
	padding: 18px 15px 18px 15px !important;
	color: rgb(97, 97, 114) !important;
	border-radius: 0px !important;
}
.checkout_Button {
	color: white !important;
	background-color: rgb(71, 89, 103) !important;
}

.total_price_and_Checkout_Conatiner {
	width: 93%;
	display: flex;
	flex-direction: column;
	/* justify-content: flex-end; */
	align-items: flex-end;
}
</style>
