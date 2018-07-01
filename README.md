# quasi-wiimotes

Your smartphone can simulate a wiimote _without_ having to install anything.

## Getting Started

1. `npm install` in both `client/` and `server/`
2. `npm run serve` in both `client/` and `server/`
3. Create a `server_url.js` file in `client/src/` with the following contents:
```js
// exporting link to server
const PORT = 3000
const IP_ADDRESS = '123.456.7.890' 
export default `${IP_ADDRESS}:${PORT}`
```
