<p align='center'>
<a href="https://www.npmjs.com/package/botmilovien-api"><img src="https://img.shields.io/npm/v/botmilovien-api.svg?style=flat-square" alt="NPM version"></a>
</p>

<p align='center'><img src='https://img.shields.io/badge/code%20style-standard-brightgreen.svg'></img></p>
<p align='center'><img src='https://img.shields.io/npm/dt/botmilovien-api.svg'></img></p>

> **[Node.js](https://nodejs.org/) 12.20.0 or newer is required**

## 🎃 Installion

```shell
  yarn add botmilovien-api
  ```
- **Using `npm`**
  ```shell
  npm i botmilovien-api
  ```
- **Using `pnpm`**
  ```shell
  pnpm add botmilovien-api
  ```

## 📖 Usage API
```javascript
import { API, Method } from "botmilovien-api"

const api = new API ({
    api_key: ``,
    source: `api` // default
})

async function getResponse () {
    return await new Method ()
    .api
    .use (
        {
            system: "getprofile", 
            ID: 15
        }
        )
}

getResponse () // response
```