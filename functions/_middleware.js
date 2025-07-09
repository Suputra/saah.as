export async function onRequest(context) {
  const { request, next } = context;
  
  // Get the URL path
  const url = new URL(request.url);
  
  // Check if this is an x file request
  if (url.pathname.startsWith('/x/')) {
    const response = await next();
    
    // Create a new response with updated headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...response.headers,
        'Content-Type': 'text/html; charset=utf-8',
        'X-Frame-Options': 'SAMEORIGIN'
      }
    });
    
    return newResponse;
  }
  
  // For all other requests, pass through
  return await next();
} 