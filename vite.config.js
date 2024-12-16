import { build } from "vite";
import {dirname, resolve} from 'path'

export default {
    //config option
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html') ,
                contacto: resolve (__dirname, 'mario-kart.html'),
                nosotros: resolve (__dirname, 'mortal-kombat.html') 
                 
            }
        }
    }
}



