<template>
	<div
		id="nav"
		class="w-[18%] h-screen mr-[1px] bg-slate-100 border-slate-300 border-0 border-r-[0.5px]"
	>
		<div class="flex">
			<i class="fa-brands fa-gg text-3xl ml-5 mt-7 text-red-900"></i>
		</div>
		<div
			class="bg-gray-200 h-16 w-[88%] m-auto rounded-lg mt-7 flex items-center"
		>
			<img
				src="../assets/img/girl.jpg"
				alt="Girl photo"
				class="h-10 w-10 m-2 rounded-full"
			/>
			<div class="image-text-container">
				<h6 class="text-sm font-bold">Expense App</h6>
				<p class="text-[10px]">Jane Doe</p>
			</div>
		</div>
		<div
			class="link-container flex flex-col items-start mt-10 w-[85%] m-auto p-1"
		>
			<h5 class="text-pink-600 text-[13px] font-bold mb-5">General</h5>
			<router-link to="/" class="text-[13px] mb-4"
				><i class="fa-solid fa-chart-line mr-2 text-sm"></i>
				Dashboard</router-link
			>
			<router-link to="/transaction" class="text-[13px] mb-4"
				><i class="fa-solid fa-arrow-right-arrow-left mr-2 text-sm"></i>
				Transactions</router-link
			>
			<router-link to="/income" class="text-[13px] mb-4"
				><i class="fa-solid fa-coins mr-2 text-sm"></i> Income</router-link
			>
			<router-link to="/expense" class="text-[13px] mb-4"
				><i class="fa-solid fa-wallet mr-2 text-sm"></i> Expense</router-link
			>
		</div>
	</div>
</template>
