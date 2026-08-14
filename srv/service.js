const cds = require("@sap/cds");
module.exports = cds.service.impl(async function(srv){
    srv.on('helloworld',req => {
        const input = req.data.input || 'hello'
        console.log(input)
        return `${input} world`
    })

    srv.on('Addition', req => {
        console.log(req.data)
        let result = req.data.Num1 + req.data.Num2;
        return result;
    })
})

