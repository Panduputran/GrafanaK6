export const config = {

    baseUrl: __ENV.BASE_URL,

    useLogin: (__ENV.USE_LOGIN || "false") === "true",

    loginEndpoint: __ENV.LOGIN_ENDPOINT || "/login",

    username: __ENV.USERNAME,

    password: __ENV.PASSWORD,

    token: __ENV.TOKEN,

    vu: Number(__ENV.VU || 10),

    duration: __ENV.DURATION || "30s"

};