<script setup lang="ts">
const { name, tagline } = defineProps({
	name: { type: String, required: true },
	tagline: { type: String, required: true },
})

const home = () => {
	navigateTo('/')
}
</script>

<template>
	<div class="card">
		<header>{{ name }}<span class="tagline">#{{ tagline }}</span></header>
		<div class="content">You are in Winner Queue</div>
		<footer>
			<button @click="home()">Try another summoner</button>
		</footer>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	margin: 0 auto;
	padding: 1rem 1.5rem;
	color: #333;
	background-color: white;
	border-radius: 0;
	box-shadow: 2px 4px 10px rgba(0 0 0 / 25%);
	width: 100%;
	border: 5px solid #56e39f;
	max-width: 35vw;
}
header {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	margin-bottom: 2rem;
	font-weight: bold;
	.tagline {
		text-transform: uppercase;
		margin-left: .5rem;
		font-size: 1.5rem;
	}
}
.content {
	font-size: 1.5rem;
	text-align: center;
}
footer {
	margin-top: 2rem;
	display: flex;
	justify-content: center;
}
button {
	cursor: pointer;
	text-decoration: none;
	outline: 2px solid transparent;
	outline-offset: 2px;
	color: inherit;
	width: 11rem;
	height: 3rem;
	background: transparent;
	border-radius: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: #56e39f;
	transition: all 0.2s ease-in-out;
	&:hover {background-color: rgb(60 64 71 / 70%);color:white;}
	&.primary {
		background-color: #56e39f;
		border-color: transparent;
		&:hover {background-color: #56e39f;}
	}
}
</style>
