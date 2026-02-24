import { request } from '@playwright/test';

export async function getAccessToken() {
  const tenantId = process.env.TENANT_ID!;
  const clientId = process.env.CLIENT_ID!;
  const clientSecret = process.env.CLIENT_SECRET!;
  const scope = process.env.SCOPE!; // e.g. api://xxxx/.default

  const requestContext = await request.newContext();

  const response = await requestContext.post(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      form: {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: scope
      }
    }
  );

  const body = await response.json();
  return body.access_token;
}
