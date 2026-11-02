// Password gate for the BEC-2027 demo. Set BEC_PASSWORD in the Vercel project's
// Environment Variables. Any username works; only the password is checked.
export default function middleware(request) {
  const password = process.env.BEC_PASSWORD;
  if (!password) {
    return new Response('BEC_PASSWORD is not set for this deployment.', { status: 503 });
  }
  const auth = request.headers.get('authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const supplied = decoded.slice(decoded.indexOf(':') + 1);
      if (supplied === password) {
        // Continue to the static site.
        return new Response(null, { headers: { 'x-middleware-next': '1' } });
      }
    } catch (e) { /* fall through to the challenge */ }
  }
  return new Response('Password required for the BEC-2027 demo.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="BEC-2027", charset="UTF-8"' },
  });
}
