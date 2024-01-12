import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Income from "../pages/Income.vue";
import Expense from "../pages/Expense.vue";
import Transaction from "../pages/Transaction.vue";

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/income",
		name: "Income",
		component: Income,
	},
	{
		path: "/expense",
		name: "Expense",
		component: Expense,
	},
	{
		path: "/transaction",
		name: "Transaction",
		component: Transaction,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
