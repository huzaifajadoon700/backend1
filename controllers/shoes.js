import { shoeModel } from "../models/shoes.js";

export const addshoe = (req, res) => {
  const { path: productImage } = req.file;
  // console.log(req.body);
  const mdl = new shoeModel({
    title: req.body.productName,
    description: req.body.productDescription,
    price: req.body.productPrice,
  
    productImage,
  });
  console.log(mdl);
  mdl.save();
};



// export const addshoe = async (req, res) => {
//   console.log("Request Body:", req.body);
//   const { productName, productPrice, productDescription } = req.body;
//   const { path: productImage } = req.file;

//   const newProduct = new shoeModel({
//     title: productName,
//     price: productPrice,
//     description: productDescription,
//     productImage,
//   });

//   try {
//     await newProduct.save();
//     res.json(newProduct);
//   } catch (error) {
//     console.log("Not Saved...", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };




export const getShow = async (req, res) => {
  try {
    const viewdata = await shoeModel.find();
    res.json(viewdata);
  } catch (error) {
    console.log("not found any data");
  }
};

// controllers/shoes.js

export const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    const deletedProduct = await shoeModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//update products

// controllers/shoes.js

// ...

export const updateProduct = async (req, res) => {
  console.log("Received update request for productId:", req.params.productId);
  console.log("Request body:", req.body);
  const productId = req.params.productId;

  try {
    const updatedProduct = await shoeModel.findByIdAndUpdate(
      productId,
      {
        title: req.body.productName,
        price: req.body.productPrice,
        description: req.body.productDescription,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ...
