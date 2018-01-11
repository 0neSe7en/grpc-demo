const grpc = require('grpc');
const fs = require('fs');
const loaded = grpc.load('./helloworld.proto');
const path = require('path');

const server = new grpc.Server();

server.addService(loaded.helloworld.Greeter.service, {
  SayHello: (call, cb) => {
    console.log(call.request);
    cb(null, { message: 'Hello ' + call.request.name});
  }
})
const credential = grpc.ServerCredentials.createSsl(null, [{
  private_key: fs.readFileSync(path.join(__dirname, '../backend.key')),
  cert_chain: fs.readFileSync(path.join(__dirname, '../backend.cert'))
}]);

// server.addService(grpc.)

server.bind('backend.local:5000', credential);
server.start();
