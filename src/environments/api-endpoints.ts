
export function GenerateRoutes(apiUrl: string) {
    return {
        baseUrl: apiUrl,

        products: {
            baseUrl: apiUrl + '/products'
        },
        customers: {
            baseUrl: apiUrl + '/customers'
        },
        users: {
            baseUrl: apiUrl + '/users'
        },
        auth: {
            token: apiUrl + '/authentication/CreateToken',
            register: apiUrl + '/authentication/register'
        }
    };
}