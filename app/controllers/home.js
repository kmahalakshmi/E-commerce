
module.exports = {
  landingRoute: function (req, res, next) {
    res.render('index', {
      title: 'E-commerce'
    });
  }
};
