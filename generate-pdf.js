// generate-pdf.js
// This script converts the built resume.md to a PDF using markdown-it and Puppeteer.
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const puppeteer = require('puppeteer');

const inputPath = path.join(__dirname, '_site', 'resume.md');
const outputPath = path.join(__dirname, '_site', 'assets', 'pdf', 'kenblizzardcaron.pdf');

// Ensure the output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

(async () => {
  // Read markdown
  const md = fs.readFileSync(inputPath, 'utf-8');
  // Convert to HTML
  const mdIt = markdownIt({ html: true, linkify: true, typographer: true });
  const html = `<!DOCTYPE html><html><head><meta charset='utf-8'><title>Resume</title></head><body>${mdIt.render(md)}</body></html>`;

  // Launch Puppeteer and create PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({ path: outputPath, format: 'A4', printBackground: true });
  await browser.close();

  console.log('PDF generated at', outputPath);
})();
