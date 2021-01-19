export const identityServerBase = 'http://192.168.50.222:7000';

export const apiBase = 'http://192.168.50.222:5001';

export const vueBase = 'http://192.168.50.142:9527';

// 参考文档 https://github.com/IdentityModel/oidc-client-js/wiki
export const openIdConnectSettings = {
    authority: `${identityServerBase}`,
    client_id: "ipswork",
    redirect_uri: `${vueBase}`,
    response_type: "id_token token",
    scope: "openid profile apigateway_api custom.profile api1",
    post_logout_redirect_uri: `${vueBase}`,
    automaticSilentRenew: true,
};