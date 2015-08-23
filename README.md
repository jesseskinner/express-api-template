# express-api-template
A basic express api using babel and chai mocha.

## Usage

Edit config.js: 

```javascript
// do hotrestarting in development
import './test/hotrestart'

export default {
	port: 1980
}
```

and then run:

```bash
npm start
```

and visit:

```
http://localhost:1980/api/hello
http://localhost:1980/api/echo?abc=123&def=456
http://localhost:1980/api/keys?abc=123&def=456
```

## Testing & Development

```bash
npm test
```

```bash
npm run watch
```
