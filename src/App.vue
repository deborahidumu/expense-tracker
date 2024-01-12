<script lang="ts">
import { defineComponent, computed } from "vue";

import Navbar from "./components/Navbar.vue";

interface iTransaction {
	name: string;
	date: string;
	category: string;
	price: string;
	type: string;
}

export default defineComponent({
	data() {
		return {
			QUERY: encodeURIComponent('*[_type == "transactions"]'),
			PROJECT_ID: "4akqpqfm",
			DATASET: "production",
			URL: "",
			postURL: "",
			TOKEN:
				"sk2aHBCpx9enyQZpgd4nAXgpIHek6wqvkWtGwZNiNM3kpMuuRQOHGSuuHOL0BOzSKbQFSPNOzkE2EEQsTBAwBsEmuWYteLt7rJXcqMCRCEb5GzOQMq3EL6aolhI2YkM1fc0vqncRU5Poo6A3QomBZa3zEFFXEXJ7CEjqqtvYwMiVty41xt1s",
		};
	},
	async mounted() {
		this.URL = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${this.QUERY}`;
		this.postURL = `https://${this.PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/production`;
	},

	methods: {
		async fetchData() {
			let data: any;
			await fetch(this.URL)
				.then((res) => res.json())
				.then((result) => {
					data = result.result;
				})
				.catch((err) => console.error(err));
			return data;
		},
		addData(dataInfo: iTransaction) {
			const requestBody = {
				mutations: [
					{
						create: {
							_type: "transactions",
							...dataInfo,
						},
					},
				],
			};
			fetch(this.postURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.TOKEN}`,
				},
				body: JSON.stringify(requestBody),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	components: {
		Navbar: Navbar,
	},
	provide() {
		return {
			data: computed(() => this.fetchData),
			add: computed(() => this.addData),
		};
	},
});
</script>

<template>
	<div class="w-full flex box-border">
		<Navbar />
		<div class="w-[80%]"><router-view /></div>
	</div>
</template>
