<script setup lang="ts">

</script>

<template>
	<h1>Loser Queue Checker</h1>
	<search />
	<nuxt-link to="about" class="about">How does it work ?</nuxt-link>
</template>

<style scoped>
h1 {
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 2rem;
}
.about {
	color: #aaa;
	margin-top: 2rem;
	cursor: pointer;
	text-decoration: none;
	&:hover {color: white;}
}
</style>
