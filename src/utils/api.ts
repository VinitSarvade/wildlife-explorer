const API_URL = 'https://wildlife.actions.workers.dev/animals';

export async function API(queryParams: Record<'name', string>) {
  const url = new URL(API_URL);
  url.search = new URLSearchParams(queryParams).toString();
  const response = await fetch(url.toString());
  return response.json();
}
