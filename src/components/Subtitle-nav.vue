<template>
	<p class="text-xs">
		<i class="fa-solid fa-house mr-3"></i>
		<i class="fa-solid fa-angle-right mr-3"></i>
		{{ title }}
	</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		title: { type: String, default: "" },
	},
});
</script>
