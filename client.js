const express = require('express');
const soap = require('soap');
const url = 'http://localhost:3031/bmicalculator?wsdl';
const args = { nombre: "juan" };
soap.createClient(url,"disableCache", function(err, client) {
  if (err) console.error(err);
  else {
    client.calculateBMI(args, function(err, response) {
      if (err) console.error(err);
      else {
        console.log(response);
        // res.send(response);
      }
    });
  }
});