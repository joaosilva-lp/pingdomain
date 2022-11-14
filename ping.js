const domainPing = require("domain-ping");
 
domainPing('sapo.pt') // Insert the domain you want to ping
    .then((res) => {
        console.log(res); // Replace with your code
    })
    .catch((error) => {
        console.error(error);
    });
