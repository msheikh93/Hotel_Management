const Customer = require('./customerModel');

var customers = {};

customers.createCustomer = (req, res, next) => {
  let customer = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    creditcard: req.body.creditcard,
  }

  Customer.create(customer, (err, data) => {
    if (err) {
      console.log("Error :", err);
    }
  });

  next();
};

customers.updateCustomer = (req, res, next) => {
  Customer.findOne({_id: req.body._id}, function (err, found) {
    found.firstname = req.body.firstname;
    found.lastname = req.body.lastname;
    found.creditcard = req.body.creditcard;

    found.save(function (err) {
      req.method = 'GET';
      });
    });

    res.redirect('/admin');
}

customers.deleteCustomer = (req, res, next) => {
  Customer.find({_id: req.body._id}).remove((err) => {
    req.method = 'GET';
    res.redirect('/');
  });
}

customers.allCustomers = (next) => {
  Customer.find({}, next);
}

module.exports = customers;