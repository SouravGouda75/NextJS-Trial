import mongoose from "mongoose"

const connect= async()=>{
      if(mongoose.connections[0].readyState)

      {
        return
        // return handler(req,res)
      }

      await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,
        useUnifiedTopology: true,})
      // return handler(req,res)
}

export default connect