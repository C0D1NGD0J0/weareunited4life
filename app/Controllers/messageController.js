"use strict";
const Message = require('../Models/Message');
const User = require('../Models/User');
const Filter = require("bad-words");
const customFilter = new Filter({ placeholder: '!'});
const socketIOClient = require("socket.io-client");
const socket = socketIOClient(process.env.LOCALHOST);

const messsageCntrl = {
	index: async (req, res, next) =>{
		const { receiverId } = req.params;
		const errors = {};

		try {
			const messages = await Message.find({ '$or': [{'sender': req.user._id, 'receiver': receiverId }, { 'sender': receiverId, 'receiver': req.user._id }] }).populate("sender receiver", "username avatar");
			return res.status(200).json(messages);
		} catch(error) {
			return res.status(404).json(error);
		};
	},

	create: async (req, res, next) =>{
		const errors = {};
		const { receiverId } = req.params;

		try {
			if(user.isFollowing(receiverId)){
				const message = await new Message({
					text: req.body.text,
					sender: req.user.id,
					receiver: receiverId
				}).save();

				socket.emit("PRIVATE_MESSAGE", message);
				return res.json(message);
			};
		} catch(e) {
			errors.msg = e;
			return res.status(400).json(errors);
		};
	}
};

module.exports = messsageCntrl;