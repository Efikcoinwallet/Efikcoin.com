export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "bsc-dataseed.binance.org";
    let req = new Request(url, request);
    let res = await fetch(req);
    let newRes = new Response(res.body, res);
    newRes.headers.set("Access-Control-Allow-Origin", "*");
    newRes.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    newRes.headers.set("Access-Control-Allow-Headers", "*");
    return newRes;
  }
}
