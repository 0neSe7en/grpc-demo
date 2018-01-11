# grpc-demo

- `frontend.cert`: `frontend.local`
- `backend.cert`: `backend.local`

### Test


```
$ traefik -c traefik.toml

// Another terminal
$ cd go
$ go run main.go

// Another terminal

$ cd node
$ node client.js // start node.js grpc client. Works fine.

```

```
// stop go grpc server. and run node grpc server.

$ node server.js
$ node client.js 

// response:
// { Error: Received http2 header with status: 500
//    at /xxx/grpc-demo/node/node_modules/grpc/src/client.js:554:15 code: 1, //    metadata: Metadata { _internal_repr: {} } }

```