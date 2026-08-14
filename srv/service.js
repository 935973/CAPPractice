const cds = require("@sap/cds");
module.exports = cds.service.impl(async function(srv){
    srv.on('helloworld',req => {
        const input = req.data.input || 'hello'
        console.log(input)
        return `${input} world`
    })
})

