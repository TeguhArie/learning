const logRequest = (req, res, next) => {
	console.log("log request ke path : ", req.path);
	next();
}

export default logRequest