export async function onRequest(context) {
  const { request, next } = context;
  
  // Get the URL path
  const url = new URL(request.url);
  
  // Check if this is an x file request
  if (url.pathname.startsWith('/x/')) {
    console.log('Processing /x/ request:', url.pathname);
    const response = await next();
    
    console.log('Response status:', response.status);
    console.log('Original Content-Type:', response.headers.get('Content-Type'));
    
    // Only modify successful responses
    if (response.status === 200) {
      // Create new headers object
      const newHeaders = new Headers();
      
      // Copy all existing headers
      for (const [key, value] of response.headers) {
        newHeaders.set(key, value);
      }
      
      // Override specific headers for HTML content
      newHeaders.set('Content-Type', 'text/html; charset=utf-8');
      newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
      
      console.log('Setting Content-Type to: text/html; charset=utf-8');
      
      // Create a new response with updated headers
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
      
      return newResponse;
    }
    
    return response;
  }
  
  // For all other requests, pass through
  return await next();
} 