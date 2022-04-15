module.exports = function logger(req, res, next) {
  console.log("%s-%s-%s-%s", req.method, req.path, JSON.stringify(req.query));
  next();
};
