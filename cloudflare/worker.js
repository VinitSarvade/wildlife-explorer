export default {
  async fetch(request, env) {
   return handleRequest(request, env);
  }
};

async function handleRequest(request, env) {
  const url = new URL(request.url);
    const proxyUrl = `${env.PROXY_API_URL}${url.pathname}${url.search}`;

    if (url.pathname !== '/animals') {
      return new Response(JSON.stringify({
        error: "enter a valid url",
      }), {
        status: 400
      });
    }

    const proxyResponse = await fetch(proxyUrl, {
      headers: {
        'X-Api-Key': env.PROXY_API_KEY
      }
    });

    const data = await proxyResponse.json();
    const response = new Response(JSON.stringify(cleanData(data)));
    response.headers.set("Access-Control-Allow-Origin", request.headers.get('origin'));
    return response;
}

function cleanData(data) {
  const unique =  data.reduce((acc, animal) => {
    const sciName = animal.taxonomy.scientific_name;
    if (sciName && !acc[sciName]) {
      acc[sciName] = animal;
    }
    return acc;
  }, {});

  return Object.values(unique);
}
