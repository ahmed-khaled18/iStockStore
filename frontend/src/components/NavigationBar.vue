<template>
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

			<router-link class="router_link" to="/cart">
			<v-btn elevation="0" class="button1 cart_Button">
				<v-icon left dark>
					mdi-cart-minus
				</v-icon>
				Your Cart
			</v-btn>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
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

.router_links_container {
	display: flex;
	align-items: center;
}
</style>
