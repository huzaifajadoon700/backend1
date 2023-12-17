export const checkout = async (req, res) => {
    try {
      const mdl = new checkoutmodel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
      });
  
      await mdl.save();
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };  