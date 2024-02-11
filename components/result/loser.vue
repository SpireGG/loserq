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
		<div class="content">
			<h2>You are in Loser Queue</h2>
			<p class="heading">What does it mean ?</p>
			<p>
				The matchmaking algorithm will give you worst teammates in order to force losses on you. The quality of your games will be a lot worse: your teammates will probably be inters, paid actors, or players that do not belong in your current rank.
				This is done by Riot Games in order to make sure that you keep playing the game, trying to force you around a ~50% winrate.
			</p>
			<p class="heading">How to escape loser queue ?</p>
			<p>Since loser queue is forced onto you by Riot Games, there are no solutions other than playing games in order to escape Loser Queue. Here are the currently known solutions to get out of loser queue:</p>
			<ul>
				<li>Accept the losses and wait to naturally get back to winner queue</li>
				<li>Get better at the game, allowing you to carry games despite your win trading teammates</li>
				<li>Ask a better player to play on your behalf, possibly paying them, in order to avoid losses</li>
				<li>Sell your account and buy a new one, that will hopefully stay out of loser queue long enough</li>
				<li>Consider playing another game where the developer did not implement no loser queue</li>
			</ul>
		</div>
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
	border: 5px solid #e84855;
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
	h2 {
		font-size: 1.5rem;
		text-align: center;
	}
	.heading {
		font-weight: bold;
		margin: 1rem 0 .5rem;
	}
}
footer {
	margin-top: 2rem;
	display: flex;
	justify-content: center;
}
ul {
	margin-top: .5rem;
	margin-left: 1.5rem;
	list-style-type: disc;
	li {margin-bottom: .25rem;}
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
	border-color: #e84855;
	transition: all 0.2s ease-in-out;
	&:hover {background-color: rgb(60 64 71 / 70%);color:white;}
	&.primary {
		background-color: #e84855;
		border-color: transparent;
		&:hover {background-color: #e84855;}
	}
}
</style>
