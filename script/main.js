
let rotateTile = (element) => {

	// alt + shift + L > |
	// altGr + ?? > |
	let a = (element.a || 0) + 90
	element.a = a
	element.style.transform = 'rotate(' + a + 'deg)'

}

let rotateRandomTile = () => {

	let tiles = document.querySelectorAll('section#s2 div.tile')
	let index = Math.floor(Math.random() * tiles.length)
	let randomTile = tiles[index]
	rotateTile(randomTile)

}

setInterval(rotateRandomTile, 3000)




//
//
// let makeGrid = (col, row, tileSize) => {
//
// 	let container = document.querySelector('section#s3 div.grid')
// 	let total = col * row
//
// 	container.style.width = (tileSize * col) + 'px'
// 	container.style.height = (tileSize * row) + 'px'
//
// 	for (let i = 0; i < total; i++) {
//
// 		let div = document.createElement('div')
// 		container.append(div)
//
// 		div.style.width = tileSize + 'px'
// 		div.style.height = tileSize + 'px'
//
// 		// mettre une couleur en arrière plan ?
// 		// div.style.background = ['red', 'blue', '#fc0', 'purple', '#09f'][i % 5]
//
// 		let appendImage = (url) => {
//
// 			let layer = document.createElement('div')
// 			div.append(layer)
// 			layer.classList.add('layer')
// 			layer.style.backgroundImage = `url(${url})`
//
// 		}
//
// 		// le design génératif commence ici:
// 		if (Math.random() < 0.3) {
// 			appendImage('assets/redline-3.svg')
// 		}
//
// 		if (Math.random() < 0.1) {
// 			appendImage('assets/flowe.svg')
// 		}
// 		if (Math.random() < 0.5) {
// 			appendImage('assets/3d.svg')
// 		}
//
// 		if (Math.random() < 0.2) {
// 			appendImage('assets/four.svg')
// 		}
// 		// Design
// 		if (Math.random() < 0.5) {
// 			appendImage('assets/puntos.svg')
// 		}
// 	if (Math.random() < 0.5) {
// 			appendImage('assets/temple.svg')
// 		}
// 		// if (Math.random() < 0.5) {
// 		// 	appendImage('assets/redline-3.svg')
// 		// }
//
// 	}
//
// }

let makeGrid= (col, row, tileSize) => {

	let container = document.querySelector('section#s4 div.grid')
	let total = col * row

	container.style.width = (tileSize * col) + 'px'
	container.style.height = (tileSize * row) + 'px'

	for (let i = 0; i < total; i++) {

		let div = document.createElement('div')
		container.append(div)

		div.style.width = tileSize + 'px'
		div.style.height = tileSize + 'px'

		// mettre une couleur en arrière plan ?
		// div.style.background = ['red', 'blue', '#fc0', 'purple', '#09f'][i % 5]

		let appendImage = (url) => {

			let layer = document.createElement('div')
			div.append(layer)
			layer.classList.add('layer')
			layer.style.backgroundImage = `url(${url})`

		}

		// le design génératif
		if (Math.random() < 0.7) {
			appendImage('assets/azul1/croisans.svg')
		}
		if (Math.random() < 0.6) {
			appendImage('assets/azul1/medias_lunas.svg')
		}
		if (Math.random() < 0.4) {
			appendImage('assets/azul1/gajos.svg')
		}
		if (Math.random() < 0.6) {
			appendImage('assets/azul1/eclipses.svg')
		}
		if (Math.random() < 0.8) {
			appendImage('assets/azul1/centro.svg')
		}
		if (Math.random() < 0.5) {
			appendImage('assets/azul1/puntos_chicos.svg')
		}
		if (Math.random() < 0.6) {
			appendImage('assets/azul1/puntos_grandes.svg')
		}



	}

}

makeGrid(8, 6, 80)
