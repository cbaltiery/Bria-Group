const mongoose = require("mongoose");

//Schema global settings
mongoose.Schema.Types.String.set('trim', true);
mongoose.Schema.Types.String.set('default', '');
mongoose.Schema.Types.Date.set('default', 'Date.now');
mongoose.Schema.Types.Number.set('default', 0);

const UserSchema = new mongoose.Schema({

	username: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},  //should be hashed
	displayName: String,
	profilePictureUrl: String,
	coverPictureUrl: String,
	aboutBlurb: String,  //store user's 'about' info

	properties: {
		//user properties
		isUserBriaAdmin: {type: Boolean, default: false}, //is this user a bria admin
		isUserEmailVerified: { type: Boolean, default: true }, //email verfied?
		//profile properties
		isProfileActive: {type: Boolean, default: true}, //conditional display, no actual deletes! 
		isProfilePrivate: {type: Boolean, default: false}, //true => app hideg identifying info
		isProfileVisible: {type: Boolean, default: true} //profile (in)vibility status
	},

	location: {   //garden's # of observations
		city: String,
		state: String,
		country: String,
		longitude: Number,
		latitude: Number
	},

	certifications:{ 

		Budburst:{
			uId: String,
			speciesCount: Number,
			when_Budburst_I: Date,  //need 5 budburst observations
			when_Budburst_II: Date  //add 5 more budburst observations
		},

		eBird: {
			uId: String,
			speciesCount: Number,
			when_eBird_I: Date     //record 5 observations
		},

		iNaturalist:{
			uId: String,
			speciesCount: Number,
			when_iNaturalist_I: Date,   // identify 10 or more WILD species on garden property
			when_iNaturalist_II: Date //1) make 50 observations to become iNaturalist "place"
									  //2) set up garden's KML file
		}
	,

	gardensTable: [{
		gardenId: {type: String, required: true},
		isGardenCreator: {type: Boolean, default: false},
		//isGardenAdmin: {type: Boolean, default: false}, //garden is run by everyone
		joinedOnDate: Date
	}],

	//placeholder data for future capabilities

	// linksTable: [{
	// 	title: {type: String, required: true},
	// 	url: {type: String, required: true}
	// }],
	
	// followersTable: [{userId: String}],
	// followingTable: [{userId: String}],

},
//Schema options
{timestamps: true});

module.exports = mongoose.model("User", UserSchema)