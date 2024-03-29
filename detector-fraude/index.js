const natural = require('natural')
const classifier = new natural.BayesClassifier()
const fs = require('fs')

function main() {

	let i = 0
	let contents = JSON.parse(fs.readFileSync('./fraudes_compilado.json'))

	while (i < contents.length) {
		classifier.addDocument(contents[i].description, 'fraude')
		i++
	}

	classifier.train()

	classifier.save('./fraudes_model.json', () => {
		process.exit(0)
	});


}

main() 