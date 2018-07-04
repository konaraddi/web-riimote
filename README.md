# web-riimotes

Your smartphone can simulate a wiimote _without_ having to install anything. No mobile or desktop apps are involved.

## Getting Started

**This has only been tested on Chrome.**

Please be familiar with Vue, Node, Koa, and Socket.io. The client uses Vue. The server uses Node, Koa, and Socket.io.

1.  `npm install` in both `client/` and `server/`
2.  Create a `server_address.js` file in `client/src/` with the following contents:

```js
// exporting link to server
const PORT = 3000;
const IP_ADDRESS = "123.456.7.890"; // replace this with your laptop's public ip address so you can test it out on your own network
export default `${IP_ADDRESS}:${PORT}`;
```

The `server_address.js` file is imported in `client/src/main.js` and is used when adding the `$socket` instance property to Vue.

3.  `npm run serve` in both `client/` and `server/`. Visit the client on a laptop (or larger screen) AND a smartphone.

The `MainDisplayView` is meant to be visited on a laptop (it will act as the main display). The `ControllerView` is meant to be visited by the smartphone. The smartphone acts as a remote for the main display. 

For the best experience, the smartphone should be 2 feet away from the main display's screen (stand further away if the main display is larger than a typical laptop's screen), point the smartphone's top edge at the center of the main display's screen, and refresh the webpage. You should now be able to point the smartphone at the screen and see a cursor.

## What it can do and it's limitations

It can:
- Detect shakes :heavy_check_mark:
- Detect steering (tiling the controller like if you were playing Mario Kart) :heavy_check_mark:
- Detect where the user is pointing :heavy_check_mark:

Limitations:
- Does not support more than one controller
- Does not support rooms on sockets (so if the project was hosted then only one person would be able to use it)
- User must be standing in the same position for the cursor to work consistently. If the user walks several steps away from their initial position then the cursor will either not follow or poorly follow where the user is pointing.

## Built With

- [Vue.js](https://vuejs.org/) - front end JavaScript framework
- [Buefy](https://buefy.github.io/) - "Lightweight UI components for Vue.js based on Bulma"
- [Node.js](https://nodejs.org/en/) - back end JavaScript framework/runtime
- [Koa](https://koajs.com/) - "a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs"
- [Socket.io](https://socket.io/) - for "real-time bidirectional event-based communication"

## Acknowledgements

The image of the Wii cursor came from [wiibrew.org and was made by drmr](http://wiibrew.org/wiki/Wii_Homebrew_Cursors) and is available in the public domain.
The image of the Wii wheel came from [mariokartwii.wikia.com](http://mariokartwii.wikia.com/wiki/Wii_Wheel).
This project was inspired by the [2016 Android Experiments Winner](https://experiments.withgoogle.com/3d-controller).

## Miscellaneous

Links to details on the Device Orientation/Motion APIs:

- https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
- https://developers.google.com/web/fundamentals/native-hardware/device-orientation/

Check out [what the web can do today](https://whatwebcando.today/).

This project is NOT affiliated with, or in any way associated with, Nintendo or its products.

## License

[MIT](LICENSE.txt)