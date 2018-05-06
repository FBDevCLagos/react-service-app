import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//schema for signing up

const serviceWorker = new schema({
	name:{
		type: String,
		required:[true, 'name field is required']
	},
	number:{
		type: Number,
		required: [true, 'number field is required']
	}
});

const serviceWorkerModel = mongoose.model('serviceWorkerModel', serviceWorker);

module.exports = serviceWorkerModel;