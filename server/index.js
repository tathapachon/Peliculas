const app = require("./src/routes/index.js");
const cors = require("cors")
app.use(cors())
app.get("/",(req,res)=>{
    res.send("API is running ...")
})
app.listen(3001,console.log(` server running port 3001`))
