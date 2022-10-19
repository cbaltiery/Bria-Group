const mongoose = require("mongoose");

//Schema global settings
mongoose.Schema.Types.String.set('trim', true);
mongoose.Schema.Types.String.set('default', '');
mongoose.Schema.Types.Number.set('default', 0);

const GardenSchema = new mongoose.Schema({

	//required's
	gardenName: {type: String, required: true, unique: true},
	email: { type: String, required: true, unique: true },
	city: {type: String, required: true},
	state: { type: String, required: true },

	//automatic
	createdById: mongoose.Types.ObjectId, //set the rec.user._id upon creation

	//main
	displayName: String, //fullName or orgName
	profilePictureUrl: String, //or logo or insignia
	coverPictureUrl: String,
	description: String, //description
	hasKMLfile: { type: Boolean, default: false },
	kmlFilePath: String,

	//properties
	isActive: {type: Boolean, default: true}, //conditional display, no actual deletes!
	isVisible: { type: Boolean, default: true }, //profile (in)vibility status
	isPrivate: {type: Boolean, default: false}, //true => app hide identifying info

	// location
	country: String,
	longitude: Number,
	latitude: Number,

	//property data
	totalSquareFootage: Number, //total = impermeable + open
	impermeableSquareFootage: Number,
	openSquareFootage: Number,
	hasWaterCollection: Boolean,
	waterCaptureCapacity: Number, //yearly in gallons
	subWaterShedName: String,
	subWaterShedCode: String,

	Pesticide_Free: {
		hasCert: {
			type: Boolean, default: false
		},
		method: {
			type: String,
			enum: [	'Self-verified',
					'Submitted photo']
		},
		dateOf: Date
	},
	Leave_The_Leaves:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Safe_Soil:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Water_I:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Native_I:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Native_II:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Meadow_I:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Meadow_II:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	Community_Classroom_I:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	NSF_Certification:{
		hasCert: {type: Boolean, default: false},
		method: {type: String, enum: ['Self-verified','Submitted photo']},
		dateOf: Date},
	
//members	
	usersTable: [{  //garden's human members
		_id: mongoose.Types.ObjectId,
		// joinedOn: Date,
		// certificationsCount: Number,
		// iNatCount: Number,
		// eBirdCount: Number,
		// BugbountyCount: Number
	}],
	
	// photosTable: [{ //link to all uploaded photos
	// 	type: String,
	// 	description: String
	// }],
		
	// iNaturalistGardenSpeciesCount: Number,   //if so, garden's # of observations
	// iNaturalistUsersTotalCount: Number,  //cumulative member's total # of observations
	// eBirdSpeciesGardenCount: Number,
	// eBirdUserCount: Number,  //total of all members
	// bugBountySpeciesCount: Number, //cum total bb species counts
	// bugBountyUserCount: Number,    //number of members who have BB account
    
    //	roundtablesTable: [{ //how gardens will link to parent roundtables
		//roundtableId: String,
		//memberSinceDate: Date
	//}],
},
{timestamps: true});  //can track createdOn and updatedOn properties automatically

module.exports = mongoose.model("Garden", GardenSchema)