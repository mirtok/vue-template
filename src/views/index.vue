<template>
	<div class="index">
		{{new Date() | timeFormat}}
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from "vuex";
	export default {
		name: "index",
		data() {
			return {
				msg: "hello"
			}
		},
		computed:{
			...mapGetters(["getCount"])
		},
		methods:{
			...	mapMutations({
				setnum: "SET_COUMT",
				addnum: "SET_COUMT_ADD",
				reducenum: "SET_COUMT_REDUCE"
			})
		},
		mounted() {
			console.log(this.getCount);
			this.setnum(50);
			this.addnum(5);
			this.reducenum(2);
			console.log(this.getCount);
		}
	}
</script>

<style scoped>

</style>