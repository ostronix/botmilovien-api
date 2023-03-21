"use strict"

const Standart = require (`./standart.js`)
const Link = "https://milovienbot"
const fetch = (url) => new Promise ((resolve, reject) => resolve (global.fetch(url)))

class API {
    constructor (
        {
            api_key,
            source
        }
    ) {
     this.api_key = api_key
     this.source = source
     Standart.api_key = api_key
     Standart.source = source
    }
}

class MethodAPI {

    constructor () {
    
        this.api = {
            use: async function (sources) {
                let module = []
                for (const keys in sources) {
                    if (sources.hasOwnProperty(keys)) {
                        module.push(keys + '=' + encodeURIComponent(sources [keys]));
                    }
                }

                module = module.join('&')

                const params = Standart.source [0] !== `/` ? `/` + Standart.source : Standart.source + "?" + `api_key=` + Standart.api_key + `&` + module

                return fetch(Link + params)
                 .then (response => response.json ())
            }
        }
    }

}

module.exports = {
    API: API,
    Method: MethodAPI
}