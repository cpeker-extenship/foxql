const FoxQL = require("./src/core/network.js");


var network = new FoxQL({
  numClients : 10,
  autoUpgrade : true,
  host : "http://localhost:1200",
  database : {
    storageName : "foxql-database",
    saveInterval : 800,
    fields : [
        'title',
        'content',
        'documentType'
    ],
    ref : 'documentId'
  }
});

network.open(connect =>{
  console.log(connect);
});


network.loadEvents([
  'message',
  'ready'
], listener=>{
  console.log(listener);
});


window.foxQL = network;