'use strict';

let good = [];
let mainObj = {};
var i = 0;
fetch('/data.json')
  .then(function(resp) {
    return resp.json();
   })
  .then(function(data) {
    // for (let i = 0; index < data.title.lenght; i++) {
    //     const element = array[index];
        
    // }
    console.log(data.title_h2[8].name)
    mainObj = data.title_h3[i].topic;
    showObj();
  })