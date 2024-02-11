<script setup lang="ts">
</script>

<template>
	<main>
		<div class="cover" />
		<div class="content">
			<NuxtPage />
		</div>
	</main>
</template>

<style scoped>
.cover {
	background-image: url('~/assets/nunu.jpg');
	background-size: cover;
	background-position: center;
	position: absolute;
	inset: 0;
	opacity: .5;
	z-index: 0;
}
main {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: rgb(42 67 101 / 100%);
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1;
	height: 100%;
}
</style>
