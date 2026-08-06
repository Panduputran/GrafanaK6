export const config = {

    baseUrl: __ENV.BASE_URL,

    vu: Number(__ENV.VU || 10),

    duration: __ENV.DURATION || "1m"

}