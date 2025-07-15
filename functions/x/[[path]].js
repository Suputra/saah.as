export async function onRequest(context) {
  const { request, next, env } = context;
  
  console.log('Route-based function triggered for:', request.url);
  
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
    
    // Get deployment info for cache busting
    const deploymentId = env.CF_PAGES_COMMIT_SHA || env.CF_PAGES_BRANCH || 'unknown';
    const currentETag = response.headers.get('ETag') || '';
    
    // Create deployment-specific ETag
    const deploymentETag = `"${deploymentId}-${currentETag.replace(/"/g, '')}"`;
    
    // Override specific headers for HTML content
    newHeaders.set('Content-Type', 'text/html; charset=utf-8');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    
    // Smart caching: cache for 1 hour but use deployment-specific ETag
    newHeaders.set('Cache-Control', 'public, max-age=3600, must-revalidate');
    newHeaders.set('ETag', deploymentETag);
    
    // Add deployment info for debugging
    newHeaders.set('X-Deployment-ID', deploymentId);
    newHeaders.set('X-Function-Type', 'route-based');
    
    console.log('Setting Content-Type to: text/html; charset=utf-8');
    console.log('Setting ETag to:', deploymentETag);
    
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