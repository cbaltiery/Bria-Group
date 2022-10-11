const mongoose = require("mongoose");

//Schema global settings
mongoose.Schema.Types.String.set('trim', true);
mongoose.Schema.Types.String.set('default', '');
mongoose.Schema.Types.Date.set('default', 'Date.now');
mongoose.Schema.Types.Number.set('default', 0);

const GardenSchema = new mongoose.Schema({

	gardenName: {type: String, required: true, unique: true},
	email: {type: String, unique: true, lowercase: true},
    hashedPassword: {type: String, required: true},
	displayName: String, //fullName or orgName
	profilePictureUrl: String, //or logo or insignia
	coverPictureUrl: String,
	photosTable: [{ //link to all uploaded photos
		type: String,
		description: String
	}],
	mainDescription: String, //description
	createdById: String, //user who first created this garden

	hasKMLfile: { type: Boolean, default: false },
	kmlFilePath: String,

	properties: {
		isActive: {type: Boolean, default: true}, //conditional display, no actual deletes!
		isVisible: { type: Boolean, default: true }, //profile (in)vibility status
		
		//isPrivate: {type: Boolean, default: false}, //true => app hide identifying info
			//removed, functionality overlap with isVisible.

	},

	location: { //exclude too specific location
		city: String,
		state: String,
		country: String,
		longitude: Number,
		latitude: Number
	},

	apiData: {  //a garden m
		iNaturalistGardenId: String,  //garden may have its owwn account
		iNaturalistGardenSpeciesCount: Number,   //if so, garden's # of observations
		iNaturalistUsersTotalCount: Number,  //cumulative member's total # of observations

		eBirdGardenId: String,
		eBirdSpeciesGardenCount: Number,
		eBirdTotalUsersCount: Number,  //total of all members

		bugBountyGardenId: String,
		bugBountyGardenSpeciesCount: Number, 
		bugBountyUsersTotalCount: Number    //total of all members
	},

	linksTable: [{  //social media links, personal sites, member sites
		title: String,
		url: String
	}],

	usersTable: [{  //garden's human members
		uId: String,	
		certificationsCount: Number,
		iNatCount: Number,
		eBirdCount: Number,
		BugbountyCount: Number
	}],

	roundtablesTable: [{ //how gardens will link to parent roundtables
		roundtableId: String,
		memberSinceDate: Date
	}],

	propertyData: { 
		totalSquareFootage: Number, //total = impermeable + open
		impermeableSquareFootage: Number,
		openSquareFootage: Number,
		hasWaterCollection: {type: Boolean, default: false},
		waterCaptureCapacity: Number, //yearly in gallons
		subWaterShed: {
			name: String,
			code: String
		}
	},

	certifications: {  //has Cert bool when true, then method and date must be set

		Pesticide_Free:{
			hasCert: {type: Boolean, default: false},
			method: {type: String, enum: ['Self-verified','Submitted photo']},
			dateOf: Date},
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
			dateOf: Date}
	}
},
{timestamps: true});  //can track createdOn and updatedOn properties automatically



module.exports = mongoose.model("Garden", GardenSchema)