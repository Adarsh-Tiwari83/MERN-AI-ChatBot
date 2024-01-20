import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connect to listeners
const PORT=process.env.PORT || 5000;

connectToDatabase()
   .then(()=>{
    app.listen(PORT,()=>
         console.log("server Open and Connected to Database")
         );
   })
   .catch((err)=>console.log(err));

