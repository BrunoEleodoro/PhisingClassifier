const natural = require('natural')
const classifier = new natural.BayesClassifier()
const fs = require('fs')

natural.BayesClassifier.load('./fraudes_model.json', null, (err, classifier) => {
	let data = fs.readFileSync('./fraude.txt').toString()
	data = data.trim()
	let porcentage = parseFloat(classifier.getClassifications(data)[0].value.toString().substring(0, 3))
	porcentage = porcentage * 10
	porcentage = porcentage + "%"
	console.table([{ description: data.substring(0, 80) + "...", porcentage: porcentage }])
})
