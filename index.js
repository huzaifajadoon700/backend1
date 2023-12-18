import cors from 'cors'
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import shoes from './routes/shoes.js';
import signup from './routes/signup.js';
import signin from './routes/signin.js';
import checkout from './routes/checkout.js';
import review from './routes/reviews.js';
import { shoeModel } from "./models/shoes.js"
import reviewsRouter from './routes/reviews.js';
import multer from 'multer';

const app = express();
// app.use(cors(
//   {
//     origin :["https://deploy-frontend-eight.vercel.app"],
//              methods: ["POST", "GET","PUT","DELETE"],
//     credentials: true
//   }
// ));
// app.use(cors({ origin: 'https://deploy-frontend-eight.vercel.app' }));
const corsOptions = {
  origin: 'https://deploy-frontend-eight.vercel.app',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
const url="mongodb+srv://huzaifa:123@cluster0.rofjhvt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url , {useNewUrlParser: true , useUnifiedTopology: true } )
.then(()=>console.log("connected to db"))
.catch(()=>console.log("not connected"));



app.use(bodyParser.json( { extends:true } ) );
app.use(bodyParser.urlencoded({extends:true }));
app.use("/shoes",shoes);
app.use("/viewproducts",shoes);
app.use("/deleteproducts",shoes);
app.use("/updateproducts",shoes);
app.use("/signup",signup);
app.use("/signin", signin);
app.use("/Images",express.static("Images"))
//reviews
app.use("/reviews", reviewsRouter);
app.use('/uploads', express.static('uploads'));


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


//update apiiii
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get('/update/:productId', async (req, res) => {
  try {
    const data = await shoeModel.findOne({ _id: req.params.productId });
    if (data) {
      res.send(data);
    } else {
      res.send('No Data');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/update/:productId', upload.single('productImage'), async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      productImage: req.file ? req.file.path : undefined, // Check if a file was provided
    };

    const data = await shoeModel.updateOne(
      { _id: req.params.productId },
      { $set: updatedData }
    );

    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//update endsss

app.listen("https://backend1-api.vercel.app", () => {
  console.log("Server is running on port 8000");
});


