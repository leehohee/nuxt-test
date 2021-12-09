module.exports = {
    head: {
        
            title: 'COMFORDE',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
              ],
        
    },
    components : true,
    modules: [
        '@nuxtjs/axios',
        
    ],
    buildModules:[
       
    ],
    moment:{
        locales: ['ko'],
    },
    build:{
        analyze: false,
        extend(config, { isClient, isServer, isDev}){
            if (isServer && !isDev){
                config.devtool = 'hidden-source-map';
            }
            console.log('webpack', config, isServer, isClient);
        },
    },
    
    plugins:[

    ],
    axios:{
        browserBaseURL: 'http://localhost:3065',
        baseURL: 'localhost:3065',
        https: false,
    },
    server:{
        port: process.env.PORT || 80,
        
    },
    
};