[![Netlify Status](https://api.netlify.com/api/v1/badges/4105952b-0ce9-4fc6-9b18-c2d14012a460/deploy-status)](https://app.netlify.com/sites/kenblizzardcaron/deploys)

Simple example of how to maintain a website and PDF of a resume, all using one data source. Needs netlify to do the PDF building, but could be swapped out with puppeteer.

- Starts with [11ty-resume-template](https://github.com/learnwithgurpreet/11ty-resume-template)
- Added a /resume print version template
- Deploy site to [netlify](https://www.netlify.com/).
- Toss in [netlify-plugin-generate-pdf](https://github.com/martinjagodic/netlify-plugin-generate-pdf)
- Now you maintain your content data in the _data dir, and it updates the website and the PDF.