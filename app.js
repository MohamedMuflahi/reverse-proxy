const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.get(':endpoint([\\/\w\\.-]*)',function(req,res){
    let endpoint = 'https://gbfs.citibikenyc.com/gbfs/en' + req.params.endpoint

    axios.get(endpoint).then(response=>{
        res.json(response.data)
    }).catch(error =>{
        res.json(error)
    })
})
app.listen(3000)