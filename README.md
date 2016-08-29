#rpi-model
---

##Description

    Module for checking if your NodeJS program runs on a Raspberry PI
    

##Installation

    $ npm install rpi-model


##Usage

```js
var rpi_model = require('rpi-model');
rpi_model(function(status,model,revision){
    // status - true if the hardware is a Raspberry Pi, false otherwise
    // model - model of the Raspberry Pi
    // revision - hardware revision code of the board 
})
```
