// Importing necessary function to handle API requests
export async function GET() {
  // Fetching data from an external API
  const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
  
  // Handling the response
  if (!res.ok) {
    return new Response('Failed to fetch data', { status: 500 });
  }
  
  // Parsing the JSON response
  const data = await res.json();
  
  // Returning the data as JSON response
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
