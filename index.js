import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", async(req,res)=>{
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        console.log(result); 
        res.render("main.ejs",{data: result})
    } catch (error) {
        console.log("failed to fetch data: "+ error.message);
        res.render("main.ejs", { error: error.message});
    }
});



// listen
app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
});