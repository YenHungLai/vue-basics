<template>
	<div :class="{red: name.length >= 5}">
		<h1>Testing</h1>
		{{ localName | capitalize }}
		<input v-model="newName" v-on:keyup.enter="changeName" />
	</div>
</template>

<script>
export default {
	name: "Test",
	props: {
		name: String
	},
	data() {
		return {
			localName: this.name,
			newName: ""
		};
	},
	methods: {
		changeName() {
			this.localName = this.newName;
		}
	},
	filters: {
		capitalize(val) {
			return val.toUpperCase();
		}
	},
	computed: {}
};
</script>

<style scoped>
.red {
	background-color: red;
}
</style>