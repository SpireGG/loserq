<script setup lang="ts">
useHead({
	title: 'Loser Queue calculator',
})
</script>

<template>
	<main>
		<div class="cover" />
		<div class="content">
			<NuxtPage />
		</div>
		<footer>Created by <a href="https://twitter.com/Chypriote" target="_blank">@Chypriote</a></footer>
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
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 2;
	height: 100%;
}
footer {
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 1rem;
	z-index: 2;
	a {
		color: #aaa;
		margin-top: 2rem;
		cursor: pointer;
		text-decoration: none;
		&:hover {color: white;}
	}
}
</style>
