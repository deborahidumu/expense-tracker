<template>
	<div class="total w-1/3 bg-gray-200 flex h-16 rounded-md">
		<span
			class="bg-gray-300 w-20 text-[30px] text-center flex items-center justify-center text-pink-700 rounded-tl-md rounded-bl-md"
		>
			<i class="fa-solid fa-dollar-sign"></i>
		</span>
		<div class="text-center w-full self-center">
			<p class="text-xs mb-[1px]">Total {{ type }}</p>
			<p class="text-2xl font-bold">${{ total }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		type: { type: String, default: "" },
		total: { type: Number, default: 0 },
	},
});
</script>
