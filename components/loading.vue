<script setup lang="ts">

type Point = {
	x: number
	y: number
	vx: number
	vy: number
	buddy?: Point
}
enum Axis {
	X= 'x',
	Y= 'y',
}

const points: Point[] = []
const velocity2 = 5
const radius = 5
const boundaryX = 200
const boundaryY = 200
const numberOfPoints = 30
let canvas: HTMLElement|null
let context: any

onMounted(() => {
	canvas = document.getElementById('container')
	context = canvas?.getContext('2d')
	init()
})

function init () {
	for (let i = 0; i < numberOfPoints; i++) {
		createPoint()
	}
	const l = points.length

	for (let i = 0; i < l; i++) {
		if (i === 0) {
			points[i].buddy = points[points.length - 1]
		} else {
			points[i].buddy = points[i - 1]
		}
	}

	// animate
	animate()
}

function createPoint () {
	const point: Point = { x: 0, y: 0, vx: 0, vy: 0 }
	point.x = Math.random() * boundaryX
	point.y = Math.random() * boundaryY
	point.vx = (Math.floor(Math.random()) * 2 - 1) * Math.random()
	const vx2 = Math.pow(point.vx, 2)
	// vy^2 = velocity^2 - vx^2
	const vy2 = velocity2 - vx2
	point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1)
	points.push(point)
}
function resetVelocity (point: Point, axis: Axis, dir: number) {
	let vx2, vy2
	if (axis === Axis.X) {
		point.vx = dir * Math.random()
		vx2 = Math.pow(point.vx, 2)
		// vy^2 = velocity^2 - vx^2
		vy2 = velocity2 - vx2
		point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1)
	} else {
		point.vy = dir * Math.random()
		vy2 = Math.pow(point.vy, 2)
		// vy^2 = velocity^2 - vx^2
		vx2 = velocity2 - vy2
		point.vx = Math.sqrt(vx2) * (Math.random() * 2 - 1)
	}
}

function drawCircle (x: number, y: number) {
	context.beginPath()
	context.arc(x, y, radius, 0, 2 * Math.PI, false)
	context.fillStyle = '#40b8b6'
	context.fill()
}
function drawLine (x1: number, y1: number, x2: number, y2: number) {
	context.beginPath()
	context.moveTo(x1, y1)
	context.lineTo(x2, y2)
	context.strokeStyle = '#8ab2d8'
	context.stroke()
}

function draw () {
	const l = points.length
	for (let i = 0; i < l; i++) {
		// circles
		const point = points[i]
		point.x += point.vx
		point.y += point.vy
		drawCircle(point.x, point.y)
		if (point.buddy) {
			// lines
			drawLine(point.x, point.y, point.buddy.x, point.buddy.y)
		}
		// check for edge
		if (point.x < radius) {
			resetVelocity(point, Axis.X, 1)
		} else if (point.x > boundaryX - radius) {
			resetVelocity(point, Axis.X, -1)
		} else if (point.y < radius) {
			resetVelocity(point, Axis.Y, 1)
		} else if (point.y > boundaryY - radius) {
			resetVelocity(point, Axis.Y, -1)
		}
	}
}

function animate () {
	context.clearRect(0, 0, 200, 200)
	draw()
	requestAnimationFrame(animate)
}
</script>

<template>
	<canvas id="container" width="200" height="200" />
</template>

<style scoped>
#container {
	margin: auto;
	transform: rotate(45deg);
}
</style>
