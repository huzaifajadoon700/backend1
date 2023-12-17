const checkoutstructure = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    city: String,
    zip: String,
  });
  
  export const checkoutmodel = mongoose.model("checkout", checkoutstructure);
  