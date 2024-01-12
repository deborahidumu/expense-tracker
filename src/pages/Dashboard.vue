<template>
	<div class="container box-border w-11/12 ml-20">
		<div class="flex gap-2 mt-16">
			<total-card type="Income" :total="totalIncome"></total-card>
			<total-card type="Expense" :total="totalExpense"></total-card>
			<total-card type="Balance" :total="totalBalance"></total-card>
		</div>
		<div class="w-full flex gap-2">
			<div class="bg-gray-200 rounded-md mt-3 pb-10 pt-12 relative w-1/3">
				<p class="absolute font-bold text-sm top-5 left-[25%]">
					Expense by Category
				</p>
				<canvas
					id="myChart"
					width="450"
					height="450"
					style="
						display: block;
						box-sizing: border-box;
						height: 300px;
						width: 300px;
					"
				></canvas>
			</div>
			<div class="bg-gray-200 rounded-md mt-3 pb-10 pt-12 relative w-2/3">
				<!-- <p class="absolute font-bold text-sm top-5 left-[25%]">
					Expense by Category
				</p> -->
				<canvas id="myLineChart"></canvas>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chart from "chart.js/auto";

import TotalCard from "../components/TotalCard.vue";

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
		"total-card": TotalCard,
	},
	data() {
		return {
			chart: null as any,
			chart2: null as any,
			totalExpense: 0,
			totalIncome: 0,
			totalBalance: 0,
			fetchTransaction: this.data,
			allTransactions: [] as iTransaction[],
			expenseTransactions: [] as iTransaction[],
			incomeTransactions: [] as iTransaction[],
			categories: [
				"Food",
				"Transportation",
				"Health",
				"Social Life",
				"Savings",
				"Others",
			],
			chartData: {
				labels: [
					"Food",
					"Transportation",
					"Health",
					"Social Life",
					"Savings",
					"Others",
				],
				datasets: [
					{
						label: "Expense by Category",
						data: [50, 1500, 400, 300, 2000, 100],
						backgroundColor: [
							"#fbcfe8",
							"#f9a8d4",
							"#f472b6",
							"#ec4899",
							"#9d174d",
							"#831843",
						],
						hoverOffset: 4,
					},
				],
			},

			chart2Data: {
				labels: ["January", "February", "March", "April", "May"],
				datasets: [
					{
						label: "Income",
						data: [85, 16, 80, 81, 36],
						backgroundColor: "rgba(236, 72, 153, 0.2)",
						borderColor: "rgba(236, 72, 153, 1)",
						borderWidth: 1,
					},
					{
						label: "Expense",
						data: [30, 69, 50, 35, 50],
						backgroundColor: "rgba(80, 7, 36, 0.2)",
						borderColor: "rgba(80, 7, 36, 1)",
						borderWidth: 1,
					},
				],
			},
		};
	},
	async mounted() {
		await this.getTransactions();
		await this.$nextTick();
		this.retrieveSumByCategory();

		const ctx = (document.getElementById("myChart") as any).getContext("2d");
		this.chart = new Chart(ctx, {
			data: this.chartData,
			type: "doughnut",
		});
		const ctx2 = (document.getElementById("myLineChart") as any).getContext(
			"2d"
		);
		this.chart2 = new Chart(ctx2, {
			data: this.chart2Data,
			type: "line",
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	},
	inject: ["data"],

	methods: {
		async getTransactions() {
			this.allTransactions = await this.fetchTransaction();
			this.expenseTransactions = this.allTransactions.filter(
				(transaction: iTransaction) => transaction.type === "Expense"
			);
			this.incomeTransactions = this.allTransactions.filter(
				(transaction: iTransaction) => transaction.type === "Income"
			);
		},
		retrieveSumByCategory() {
			this.totalExpense = this.expenseTransactions.reduce(
				(sum, current) => sum + Number(current.price),
				0
			);
			this.totalIncome = this.incomeTransactions.reduce(
				(sum, current) => sum + Number(current.price),
				0
			);
			this.totalBalance = this.totalIncome - this.totalExpense;
		},
	},
});
</script>
