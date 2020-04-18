const fs = require('fs');
const request = require("request");

async function main() {
	let i = 10000;
	// var res = [];
	var options = {
		method: 'GET',
		url: '',
		headers:
		{
			'Postman-Token': 'be84052a-092a-41fb-b676-4dd3812f0d5f',
			'cache-control': 'no-cache',
			'Upgrade-Insecure-Requests': '1',
			Cookie: '__cfduid=d3d40e7d2d07730249ba83823037f01e21586815948',
			Connection: 'keep-alive',
			'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
			Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0'
		}
	};

	while (i < 14366) {
		console.log('while', i)
		options.url = `https://catalogodefraudes.rnp.br/frauds/${i}`
		let response = await doRequest(options)

		var title = ""
		var description = ""

		if (response.includes('<h4>Assunto da mensagem:')) {
			title = response.split('<h4>Assunto da mensagem:')
			title = title[1].split('</h4>')[0].trim()
		}
		if (response.includes('###############################################################################')) {
			description = response.split('###############################################################################\n\n')
			description = description[1].split('</pre>')[0]
		}

		if (title != "") {
            var res = await read('./fraudes.json')
            res = JSON.parse(res)
			res.push({
				title: title,
				description: description
            })
            await save('./fraudes.json', JSON.stringify(res))
		}
		i++;
	}


	// fs.writeFileSync('./fraudes.json', JSON.stringify(res))
	process.exit(0)
}

function doRequest(options) {
	return new Promise((resolve, reject) => {
		request(options, function (error, response, body) {
			if (error) throw new Error(error);

			// console.log(body);
			resolve(body)
		});
	})
}

function save(filename, contents) {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(filename, contents)
        resolve(true)
    })
}

function read(filename) {
    return new Promise((resolve, reject) => {
        
        resolve(fs.readFileSync(filename))
    })
}

main();