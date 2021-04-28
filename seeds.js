require('./config/database')
const Flight = require('./models/flight')

const deleteFlights = Flight.deleteMany({})

Promise.all([deleteFlights])
.then((res)=>{
    console.log(res)
    process.exit()
})