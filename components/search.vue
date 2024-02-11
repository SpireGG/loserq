<script setup lang="ts">
const servers = ['BR', 'EUNE', 'EUW', 'JP', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'PH', 'RU', 'SG', 'TH', 'TR', 'TW', 'VN']
const name = ref<string|null>(null)
const tagline = ref<string|null>(null)
const server = ref<string|null>('EUW')
const goNext = () => {
	if (!server.value || !name.value || !tagline.value) { return }
	navigateTo(`/${server.value}/${encodeURI(name.value)}-${tagline.value?.toUpperCase()}`)
}
</script>

<template>
	<form class="search-wrapper" @submit.prevent="goNext">
		<input
			v-model="name"
			spellcheck="false"
			type="text"
			placeholder="Summoner name"
		>
		<input
			v-model="tagline"
			class="tagline"
			spellcheck="false"
			type="text"
			max="5"
			placeholder="#"
		>
		<select v-model="server">
			<option v-for="item of servers" :key="item">{{ item }}</option>
		</select>
		<button type="submit" :disabled="!name || !tagline || !server">🔍</button>
	</form>
</template>

<style scoped>
.search-wrapper {
	position: relative;
	display: flex;
	align-items: center;
	max-width: 35rem;
	font-size: 1.125rem;
	height: 3rem;
	border: 1px solid transparent;
	border-radius: .5rem;
	background-color: rgb(23 49 79 / 80%);
	&:focus-within {
		border-color: #999;
		background-color: rgb(23 49 79 / 100%);
	}
}
input:first-of-type {
	border-top-left-radius: .5rem;
	border-bottom-left-radius: .5rem;
}
button {
	border-top-right-radius: .5rem;
	border-bottom-right-radius: .5rem;
	width: 3rem;
	height: 100%;
	&:hover { color: rgb(178 245 234 / 100%);}
	&:not(:disabled):hover {
		background-color: rgb(23 49 79 / 85%);
		cursor: pointer;
	}
	&:disabled {
		background-color: rgb(23 49 79 / 75%);
	}
}
select {
	cursor: pointer;
}
input[type="text"], select, button {
	height: 100%;
	font-size: 1rem;
	padding: 0 .5rem;
	background-color: rgba(23 49 79 / 60%);
	font-weight: 700;
	border: none;
	color: #fff;
	&:focus {outline: none}
}
input[type="text"], select {
	border-right: 1px solid #999;
}
.tagline {width: 5rem;}
</style>
