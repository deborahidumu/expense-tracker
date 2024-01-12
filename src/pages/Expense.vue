<template>
	<div id="container" class="ml-20 mt-14">
		<h2 class="text-2xl font-bold mb-5">Expense</h2>

		<div class="flex justify-between w-3/4">
			<subtitle-nav title="Expense"></subtitle-nav>
			<new-button type="Expense" :categories="categories"></new-button>
		</div>

		<table class="w-3/4 border-[1px] shadow-md text-xs mt-5">
			<thead class="text-[13px] border-b-[1px] bg-gray-100">
				<th class="p-3">Name</th>
				<th>Date</th>
				<th>Category</th>
				<th class="">Price</th>
				<th>Action</th>
			</thead>
			<tbody class="text-center">
				<tr v-for="transaction in expenseTransactions" :key="transaction._id">
					<td class="p-3">{{ transaction.name }}</td>
					<td>{{ transaction.date }}</td>
					<td>{{ transaction.category }}</td>
					<td
						:class="
							transaction.type == 'Income' ? 'text-green-500' : 'text-red-500'
						"
					>
						-${{ transaction.price }}
					</td>
					<td>
						<button><i class="fa-solid fa-trash-can text-red-700"></i></button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubtitleNav from "../components/Subtitle-nav.vue";
import NewButton from "../components/NewButton.vue";

interface iTransaction {
	_id: string;
	name: string;
	date: string;
	category: string;
	price: string;
	type: string;
}

export default defineComponent({
	components: {
		"subtitle-nav": SubtitleNav,
		"new-button": NewButton,
	},
	data() {
		return {
			categories: [
				"Food",
				"Transportation",
				"Health",
				"Social Life",
				"Savings",
				"Others",
			],
			fetchTransaction: this.data,
			allTransactions: [] as iTransaction[],
			expenseTransactions: [] as iTransaction[],
		};
	},
	inject: ["data"],
	async mounted() {
		await this.getTransactions();
	},
	methods: {
		async getTransactions() {
			this.allTransactions = await this.fetchTransaction();
			this.expenseTransactions = this.allTransactions.filter(
				(transaction: iTransaction) => transaction.type === "Expense"
			);
		},
	},
});
</script>
