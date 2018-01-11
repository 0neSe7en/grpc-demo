const grpc = require('grpc');
const fs = require('fs');
const loaded = grpc.load('./helloworld.proto');
const path = require('path');

const grpcClient = new loaded.helloworld.Greeter('frontend.local:5001', grpc.credentials.createSsl(
  fs.readFileSync(path.join(__dirname, '../frontend.cert'))
))


grpcClient.sayHello({name: '12345'}, (err, res) => {
  console.log(err, res);
})
