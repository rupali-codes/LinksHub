const private_key  = process?.env?.NEXT_PRIVATE_KEY?.replace(/\\n/g,'\n',);
export const serviceAccount = {
    type: process.env.NEXT_TYPE,
    project_id: process.env.NEXT_PROJECT_ID,
    private_key_id: process.env.NEXT_PRIVATE_KEY_ID,
    private_key,
    client_email: process.env.NEXT_CLIENT_EMAIL,
    client_id: process.env.NEXT_CLIENT_ID,
    auth_uri: process.env.NEXT_AUTH_URI,
    token_uri: process.env.NEXT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.NEXT_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.NEXT_CLIENT_X509_CERT_URL,
    universe_domain: process.env.NEXT_UNIVERSE_DOMAIN
};