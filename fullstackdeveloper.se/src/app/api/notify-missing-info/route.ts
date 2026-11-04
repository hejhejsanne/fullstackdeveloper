export async function POST() { return Response.json({error:{code:'NOT_ALLOWED',message:'This endpoint is not public.'}}, {status:405,headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex'}}); }
