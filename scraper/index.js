const puppeteer = require('puppeteer');
const fs = require('fs');

async function main() {
	let i = 1;
	var res = [];
	const browser = await puppeteer.launch({
		headless: false
	});

	while (i < 14366) {
		console.log('while', i)
		const page = await browser.newPage();
		await page.goto(`https://catalogodefraudes.rnp.br/frauds/${i}`);
		let title = await page.evaluate(() => {
			return document.getElementById('text-page').querySelectorAll('h4')[0].innerText.split(':')[1].trim()
		})
		let description = await page.evaluate(() => {
			return document.querySelectorAll('pre')[0].innerText.split('####\n')[2]
		})
		res.push({
			title: title,
			description: description
		})
		await page.close()
		i++;
	}

	fs.writeFileSync('./fraudes.json', JSON.stringify(res))

	await browser.close();
}

main();