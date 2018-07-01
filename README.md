# quasi-wiimotes

Your smartphone can simulate a wiimote _without_ having to install anything.

## Getting Started

1. `npm install` in both `client/` and `server/`
2. `npm run serve` in both `client/` and `server/`
3. Create a `server_address.js` file in `client/src/` with the following contents:
```js
// exporting link to server
const PORT = 3000
const IP_ADDRESS = '123.456.7.890' 
export default `${IP_ADDRESS}:${PORT}`
```
The `server_address.js` file is imported in `client/src/main.js` and is used when adding the `$socket` instance property to Vue.

Relevant Links:

https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation

https://developers.google.com/web/fundamentals/native-hardware/device-orientation/