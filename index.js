const http=require("http");
const server=http.createServer(function(req,res){
   if(req.url === '/'){
    res.write("<h1>Hi,I am learning Node-Js</h1>")
    res.write(`<ul>
    <li>Node.js is an open source server environment<li/>
    Node.js is free
    <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)<li/>
    Node.js uses JavaScript on the server</ul>`)
    res.write("<h3>In about url uh can see JSON data in string form</h3>")
    res.end();
   }
   else if(req.method === 'GET' && req.url === '/about'){
     res.write(JSON.stringify([10,20,40,50,30]))
     res.end();
   }
   
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("<h1>I am learning node-js<h1/>");
    // res.end();
});


server.listen(8080);