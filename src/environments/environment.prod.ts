const ENDPOINT: string = 'https://api.escuelajs.co'

export const environment = {
  production: true,
  dashboard: {
    products: ENDPOINT + '/api/v1/products',
    categories: ENDPOINT + '/api/v1/categories'
  }
};
