/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url)
		const referer = request.headers.get("referer") || ""
		
		console.log("path:",url.pathname);
		console.log("referer:",referer);


		if (url.pathname.startsWith('/osaka')) {
			//url.hostname = 'patina-site-aleph-labs.vercel.app' // your origin
			url.hostname = 'dev-patina-site-aleph-labs.vercel.app' // your origin
			
			return fetch(url)
		  }
		//   else if(referer.includes("/osaka"))
		//   {
		// 	url.hostname = 'chg-app.vercel.app' // your origin
		// 	const modifiedRequest = new Request(url.toString(), request)
		// 	return fetch(modifiedRequest)
		//   }
		  else{
			return new Response('Hello World!');
		  }
		

		
	},
} satisfies ExportedHandler<Env>;
