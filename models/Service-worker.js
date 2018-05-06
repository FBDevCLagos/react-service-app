//Schema was based on what was on the signup mockup, 
//however, it should be changed if it doesn't match the planned schema

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//schema for signing up. Schema's name was based on my discretion.

const Worker = new schema({
	name:{
		type: String,
		required:[true, 'name field is required']
	},
	number:{
		type: Number,
		required: [true, 'number field is required']
	}
});

//
const serviceWorkerModel = mongoose.model('serviceWorker', Worker);

module.exports = serviceWorkerModel;