<template>
	<div class="home-body">
		<div class="navigationBar">
			<div class="navigation_Bar_Left_Container">
				<div class="navigationBar-iStock"><strong>iStock</strong></div>
			</div>
			<div class="router_links_container">
				<router-link class="router_link" to="/">
					<v-btn elevation="0" class="button1"> Home </v-btn>
				</router-link>

				<!-- <router-link class="router_link" to="/shop"> -->
				<v-btn elevation="0" class="button1"> Shop </v-btn>
				<!-- </router-link> -->

				<!-- <router-link class="router_link" to="/about"> -->
				<v-btn elevation="0" class="button1"> About Us</v-btn>
				<!-- </router-link> -->

				<router-link class="router_link" to="/signin">
					<v-btn elevation="0" class="button1"> Sign in</v-btn>
				</router-link>

				<!-- <router-link class="router_link" to="/cart"> -->
				<v-btn elevation="0" class="button1 cart_Button">
					<v-icon left dark>
						mdi-cart-minus
					</v-icon>
					Your Cart
				</v-btn>
				<!-- </router-link> -->
			</div>
		</div>
		<v-divider></v-divider>
		<v-carousel show-arrows-on-hover hide-delimiter-background height="200" cycle>
			<v-carousel-item v-for="(img, i) in carouselImages" :key="i" :src="img.src">
			</v-carousel-item>
		</v-carousel>
		<div class="shop_Text">Shop</div>
		<v-container fluid class="items_Grid">
			<v-row dense>
				<v-col v-for="item in items" :key="item._id" :cols="4">
					<v-card class="item_Card" flat @click="showItemDialogue(item)">
						<v-img :src="item.imageUrl" class="white--text align-end" height="200px">
						</v-img>
						<div class="item_Text">{{ item.name }}</div>
						<v-card-actions>
							<div>{{ item.price }} EGP</div>
							<v-spacer></v-spacer>
							<v-rating
								:value="3"
								color="amber"
								dense
								half-increments
								readonly
								size="20"
							></v-rating>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-dialog
			transition="dialog-bottom-transition"
			max-width="700px"
			v-model="isItemDialogueOpen"
		>
			<v-card>
				<img width="700px" class="pop_Image" v-bind:src="itemDialogue.imageUrl" />
				<v-card-title>{{ itemDialogue.name }}</v-card-title>
				<v-card-text>
					<v-row align="center" class="mx-0">
						<v-rating
							:value="3"
							color="amber"
							dense
							half-increments
							readonly
							size="14"
						></v-rating>

						<div class="grey--text ms-4">
							3 (413)
						</div>
					</v-row>
					<div class="my-2 text-subtitle-1">
						{{ itemDialogue.countInStock }} units available
					</div>
					<div class="my-2 text-subtitle-1">• {{ itemDialogue.price }} EGP •</div>
					<div>{{ itemDialogue.description }}</div>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			isItemDialogueOpen: false,
			itemDialogue: {
				countInStock: "",
				description: "",
				imageUrl: "",
				name: "",
				price: "",
				_id: "",
			},
			carouselImages: [
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
				},
			],
			items: [],
		};
	},
	methods: {
		async fetchItems() {
			await axios.get("http://localhost:3000/api/products").then(
				(response) => {
					if (response.status == 200) {
						this.items = response.data;
					}
				},
				(error) => {
					if (error.response.status == 400) {
					}
				}
			);
		},
		showItemDialogue: function(item) {
			this.itemDialogue = item;
			console.log(this.itemDialogue);
			this.isItemDialogueOpen = true;
		},
	},
	mounted: async function() {
		await this.fetchItems();
		// this.cards = this.items.map(item => {return}) ;
	},
};
</script>

<style scoped>
.home-body {
	background-color: #f7f7ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
}

.v-carousel {
	width: 93% !important;
	margin: 16px 0px 16px 0px !important;
}

.router_link {
	text-decoration: none;
}

.button1 {
	text-transform: none !important;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
	font-size: 18px !important;
	background-color: transparent !important;
	padding: 18px 15px 18px 15px !important;
	color: rgb(97, 97, 114) !important;
	margin-right: 5px !important;
	border-radius: 0px !important;
}
.cart_Button {
	color: white !important;
	background-color: rgb(71, 89, 103) !important;
}

.navigationBar-iStock {
	color: #fe5f55;
	font-size: 40px;
	font-family: Agency FB;
}

.navigationBar {
	width: 93% !important;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 40px;
	padding-right: 40px;
}
.v-divider {
	border-width: 1px !important;
	background-color: rgb(144, 144, 161) !important;
	border-color: rgb(144, 144, 161) !important;
	height: 100%;
	width: 93%;
}
.router_links_container {
	display: flex;
	align-items: center;
}

.items_Grid {
	width: 93% !important;
	padding: 0px !important;
}

.item_Card {
	border-radius: 0px !important;
	margin-top: 12px !important;
}

.item_Text {
	text-align: center;
	font-weight: 400;
	color: rgb(61, 61, 61);
	font-size: 14px;
}
.shop_Text {
	text-align: center;
	font-size: 29px;
	font-weight: 1000;
}

.Close_Button_Container {
	display: flex;
	width: 100%;
	justify-content: flex-end;
}
</style>
