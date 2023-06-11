# price-scraper
Uses the Woolies and Coles APIs for fetching

Woolies requires certain headers and cookies for future requets, so we first initiate a request to the Woolies homepage where we store the cookies and data, before we fetch a product.

Coles uses a specific endpoint that changes based on updates to their Next.js framework, so that needs to be updated to match in order to fetch a product.
