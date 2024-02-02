// create - post
const createNewUsers = (req, res) => {
	console.log(req.body);
	res.json({
		message: "create new users success",
		data: req.body,
	});
};

// read - get
const getAllUsers = (req, res) => {
	const data = {
		id: "1",
		name: "Teguh",
		email: "teguh@gmail.con",
		address: "jakarta",
	};
	res.json({
		message: "get all users success",
		data: data,
	});
};

// update - patch
const updateUser = (req, res) => {
	console.log(req.params);
	res.json({
        message: "update user success",
    })
};

export { getAllUsers, createNewUsers, updateUser };
