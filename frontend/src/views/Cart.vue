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
		deleteItem: function(item) {
			let itemIndex = this.$store.state.auth.cart_items.findIndex((i => i._id == item._id));
			// if(item.quantity > 1) {
			// 	this.$store.state.auth.cart_items[itemIndex].quantity -=1;
			// }
			// else{
			// 	this.$store.state.auth.cart_items.splice(itemIndex, 1);
			// }
			this.$store.state.auth.cart_items.splice(itemIndex, 1);
		},
	},
	// mounted: function() {
	// 	console.log(this.$store.state.auth.cart_items);
	// },
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
</style>
