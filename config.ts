const prodConfig = {
    publicRuntimeConfig: {
        API_ENDPOINT: 'http://google.com/api'
    }
}

const devConfig = {
    publicRuntimeConfig: {
        API_ENDPOINT: 'http://localhost:3000/api'
    }
}
  
  module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;