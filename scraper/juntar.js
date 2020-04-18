const fs = require('fs')

const filenames = [
	1000,
	2000,
	3000,
	4000,
	5000,
	6000,
	7000,
	8000,
	9000,
	10000,
	11000,
	12000,
	13000,
	14000,
	14347
]

let res = []
let i = 0
while (i < filenames.length) {
	console.log('i', i)
	let contents = JSON.parse(fs.readFileSync(`./fraudes${filenames[i]}.json`))
	let k = 0
	while (k < contents.length) {
		res.push(contents[k])
		k++
	}
	i++
}

fs.writeFileSync('./fraudes_compilado.json', JSON.stringify(res))
