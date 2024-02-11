<script setup lang="ts">
const { name, tagline } = useRoute().params
const processing = ref(true)
const winner = ref(false)
const statuses = [
	{ text: 'Finding the requested summoner', duration: 5000 },
	{ text: 'Fetching games', duration: 8000 },
	{ text: 'Analyzing most recent teammates', duration: 6000 },
	{ text: 'Computing winrates', duration: 2000 },
	{ text: 'Recognizing most likely inters', duration: 10000 },
	{ text: 'Calculating win probabilities', duration: 5000 },
	{ text: 'Comparing game outcomes', duration: 3000 },
	{ text: 'Adding some machine learning', duration: 9000 },
]
const index = ref(0)
const loadingText = computed(() => statuses[index.value].text)
const process = () => {
	if (index.value < statuses.length - 1) {
		index.value += 1
		setTimeout(() => process(), statuses[index.value].duration)
		return
	}

	processing.value = false
	winner.value = Math.random() < 0.5
}
onMounted(() => {
	setTimeout(() => process(), statuses[index.value].duration)
})
</script>

<template>
	<div>
		<div v-if="processing" class="processing">
			<client-only>
				<loading />
				<div class="status">{{ loadingText }}</div>
			</client-only>
		</div>
		<template v-else>
			<result-winner v-if="winner" :name="name" :tagline="tagline" />
			<result-loser v-else :name="name" :tagline="tagline" />
		</template>
	</div>
</template>

<style scoped>
.processing {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.status {
	margin-top: 2rem;
	font-size: 2.25rem;
	font-weight: 800;
	color: white;
}
</style>
