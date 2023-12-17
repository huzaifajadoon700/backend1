import  express  from 'express';
import multer from "multer";
import { addshoe, deleteProduct, getShow, updateProduct } from '../controllers/shoes.js';
const router =express.Router();

const storage= multer.diskStorage({
    destination:function(req,file, cb){
        cb(null, './Images/');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload= multer({storage: storage,limits: { fileSize: 5 * 1024 * 1024 },});


router.post("/",upload.single('productImage'), addshoe );



router.get("/",getShow);

// router.post("/",addshoe);
router.post("/", upload.single('productImage'), addshoe);
router.delete("/:productId", deleteProduct); 
router.put("/:productId", updateProduct);

export default router;