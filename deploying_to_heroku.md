# Deploying to Heroku

This file will go over how to prepare the project before deploying to Heroku. The server will need to serve the client.

Copy the project to another location. Use the copy of the project for the following steps. You may need to install dependencies (`npm i`) in the new copy.

Change the value of the `$socket` in `client/src/main.js`:

```js
Vue.prototype.$socket = io(`//${window.location.host}`);
```

Run `npm run build` in `client/`. Move the `client/dist/` to `server/`.

In `server/index.js`, change the `PORT` variable:

```js
const PORT = process.env.PORT || 3000;
```

In `server/`, install `koa-static`

```
$ npm i -S koa-static
```

Include `koa-static`:

```js
const serve = require("koa-static");
```

Add the following line:

```js
// add just the below line
app.use(serve("./dist"));
// add just the above line such that it is above the snippet below

// the snippet below is for reference 
server.listen(PORT, () => {
  log(`Server listening on port ${PORT}`, DEBUG_MODE);
});
```

Then, within the `server/`, deploy the project to Heroku like any other Node project.
