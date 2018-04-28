
verifyUser = (req, res, next) => {
  let userName = req.body.username;
  let password = req.body.password;

  if(userName === "hello" && password === "world") {
    res.redirect('/customer');
  } else if(userName === "main" && password === "lobby") {
    res.redirect('/lobby');
  } else if (userName === "room" && password === "service") {
    res.redirect('/roomservice');
  } else if (userName === "code" && password === "smith") {
    res.redirect('/admin');
  } else {
    res.redirect('/');
  }
  next();
};

module.exports = verifyUser;