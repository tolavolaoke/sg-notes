var express = require('express');
var router = require('./config/routes');
var app = express();
var port = 3000;

app.use(router);
// console.log('routes: routes');
//
// // // Action: index
// app.get('/users', routes.index);
//
// // Action: new
// app.get('/users/new', routes,new);
//
// // Action: createß
// app.post('/users', routes.edit);
//
// // Action: edit
// app.get('/users/:id/edit', );
//
// // Action: update
// app.put('/users/:id');
//
// // Action: destroy
// app.delete('/users/:id');
//
//
// //
// // // Action: new
// // app.get('/users/new');
// //
// // // Action: create
// // app.post('/users');
// //
// // // Action: edit
// // app.get('/users/:id/edit');
// //
// // // Action: update
// // app.put('/users/:id');
// //
// // // Action: destroy
// // app.delete('/users/:id');




app.listen(port, function() {
  console.log('App is running on port', port);
});
