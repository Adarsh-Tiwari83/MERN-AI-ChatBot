import app from "./app.js"
import  {ConnectToDatabase}  from "./db/connection.js";


// Connections and Listeners.
ConnectToDatabase().then(()=>{
    app.listen(5000,()=>{
      console.log("Connected to server.")
    });
}).catch((err)=>{console.log(err);})

