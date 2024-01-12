<template>
	<button
		class="text-xs bg-pink-600 p-2 px-3 rounded text-slate-100 font-semibold tracking-wide shadow-sm"
		@click="visible = true"
	>
		<i class="fa-solid fa-plus mr-2 text-sm"></i> New {{ type }}
	</button>
	<Dialog
		v-model:visible="visible"
		modal
		:header="`New ${type}`"
		:style="{ width: '25rem' }"
		:breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
	>
		<form>
			<label class="block mb-3">
				<span class="block text-xs font-medium text-slate-700 mb-1">Name</span>
				<input
					type="text"
					v-model="name"
					class="mt-1 block w-full px-3 py-2 bg-white border-[1.5px] border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:ring-pink-600"
				/>
			</label>
			<label class="block mb-3">
				<span class="block text-xs font-medium text-slate-700 mb-1">Price</span>
				<input
					type="text"
					v-model="price"
					class="mt-1 block w-full px-3 py-2 bg-white border-[1.5px] border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:ring-pink-600"
				/>
			</label>

			<div class="block mb-3">
				<span class="block text-xs font-medium text-slate-700 mb-1"
					>Category</span
				>
				<select
					name="category"
					id=""
					v-model="category"
					class="mt-1 block w-full px-3 py-2 bg-white border-[1.5px] border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:ring-pink-600"
				>
					<option value="null">Select a category</option>
					<option
						:value="category"
						v-for="category in categories"
						:key="category"
					>
						{{ category }}
					</option>
				</select>
			</div>
			<label class="block mb-3">
				<span class="block text-xs font-medium text-slate-700 mb-1">Date</span>
				<input
					type="text"
					v-model="date"
					class="mt-1 block w-full px-3 py-2 bg-white border-[1.5px] border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:ring-pink-600"
				/>
			</label>
			<button
				class="w-full bg-pink-600 text-slate-100 rounded p-2 mt-2 text-sm"
				@click.prevent="postTransactions()"
			>
				Submit
			</button>
		</form>
	</Dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import Dialog from "primevue/dialog";

export default defineComponent({
	components: {
		Dialog,
	},
	props: {
		type: { type: String, default: "" },
		categories: { type: Array as PropType<string[]>, default: [] },
	},
	inject: ["add"],
	data() {
		return {
			visible: false,
			name: "",
			price: "",
			category: null,
			date: "",
			postTransaction: this.add,
		};
	},

	methods: {
		async postTransactions() {
			const dataInfo = {
				name: this.name,
				price: this.price,
				category: this.category,
				date: this.date,
				type: this.type,
			};
			await this.postTransaction(dataInfo);
			this.$router.push(`/${this.type.toLowerCase()}`);
		},
	},
});
</script>
