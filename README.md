# quasi-wiimotes

Your smartphone can simulate a wiimote _without_ having to install anything.

## Getting Started

Please be familiar with Vue, Node, Koa, and Socket.io. The client uses Vue. The server uses Node, Koa, and Socket.io.

1. `npm install` in both `client/` and `server/`
2. `npm run serve` in both `client/` and `server/`
3. Create a `server_address.js` file in `client/src/` with the following contents:
```js
// exporting link to server
const PORT = 3000
const IP_ADDRESS = '123.456.7.890' // replace this with your laptop's public ip address so you can test it out on your own network
export default `${IP_ADDRESS}:${PORT}`
```
The `server_address.js` file is imported in `client/src/main.js` and is used when adding the `$socket` instance property to Vue.

The `DisplayView` is meant to be visited by a laptop. The `ControllerView` is meant to be visited by the smartphone. The smartphone acts as a remote for the laptop.

## Built With
* [Vue.js](https://vuejs.org/) - front end JavaScript framework
* [Node.js](https://nodejs.org/en/) - back end JavaScript framework/runtime
* [Koa](https://koajs.com/) - "a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs"
* [Socket.io](https://socket.io/) - for "real-time bidirectional event-based communication"

## Acknowledgements
The wiimote cursor image came from [wiibrew.org](http://wiibrew.org/wiki/Wii_Homebrew_Cursors).
This project was inspired by the [2016 Android Experiments Winner](https://experiments.withgoogle.com/3d-controller).

## Relevant Links:
Device Orientation:
* https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
* https://developers.google.com/web/fundamentals/native-hardware/device-orientation/