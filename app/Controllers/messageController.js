"use strict";
const Message = require('../Models/Message');
const User = require('../Models/User');
const Filter = require("bad-words");
const customFilter = new Filter({ placeholder: '!'});
const socketIOClient = require("socket.io-client");
const socket = socketIOClient("http://localhost:5000")

const messsageCntrl = {
	create: async (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;

		try {
			const message = new Message({
				text: req.body.text,
				sender: req.user.id,
				receiver: userId
			});

			await message.save();
			const user = await User.findById(req.params.userId);
			user.messages.push(message.id);
			await user.save();

			const createdMsg = await Message.findById(message._id).populate("user", "username avatar");
			return res.status(200).json(createdMsg);
		} catch(e) {
			errors.msg = e;
			console.log(e);
			// return res.status(400).json(errors);
		};
	}
};

module.exports = messsageCntrl;