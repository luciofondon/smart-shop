declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_ENDPOINT: string;
            REACT_APP_EXPIRATION_CACHE_HOUR: number;
            NODE_ENV: 'development' | 'production';
        }
    }
}

export { }