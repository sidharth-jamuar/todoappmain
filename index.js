const app=require('express')();
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const keys=require("./config/keys")
const cors=require("cors");

app.use(cors({origin:"http://localhost:3000"}))
const PORT=process.env.PORT || 3004;
mongoose.Promise=global.Promise;
mongoose.connect(keys.mongoDBURI,{useNewUrlParser:true},()=>{
  console.log("connected to database")
})
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json())
require("./routes/userRoutes")(app)
require("./routes/todoRoutes")(app)
if (process.env.NODE_ENV === 'production') {
 
  app.use(express.static('frontend/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})