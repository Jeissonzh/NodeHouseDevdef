const mongoose = require("mongoose")
const connectionString = "mongodb+srv://Jeissonzh:1233@proyectfinal.s4te8.mongodb.net/nodeHouse?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Se ha establecido conexión con la base de datos!")
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}