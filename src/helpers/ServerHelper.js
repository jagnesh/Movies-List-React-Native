import { log } from "./Log";

export const HTTPRequest = async (url, method, headers = null, body = null) => {
	log("Request: {Url:" + url + ",Method:" + method + ",Headers:" + JSON.stringify(headers) + ",body:" + JSON.stringify(body) + "}");
	const extras = (method == 'POST') ? {
		headers: headers,
		body: JSON.stringify(body)
	} : ''
	try {
		let response = await fetch(url, {
			method: method,
			extras
		});
		let responseJson = await response.json();
		return responseJson;
	} catch (e) {
		return e;
	}
}

