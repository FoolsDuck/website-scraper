import scrape from "website-scraper";
import express from "express";

const app = express();
const port = 3000;

const domain = process.argv[2];
const options = {
	urls: [`https://${domain}`],
	directory: domain,
};

app.use(express.static(`/Users/foolsduck/Desktop/webScraper/${domain}`));

app.get("/", (req, res) => {
	res.sendFile(`/Users/foolsduck/Desktop/webScraper/${domain}/index.html`);
});

scrape(options).then((result) => {
	console.log(`Scraped ${domain}`);
	app.listen(port, () => {
		console.log(`App started on port ${port}`);
	});
});
