const mongoose = require("mongoose");

//Schema global settings
mongoose.Schema.Types.String.set('trim', true);
mongoose.Schema.Types.String.set('default', '');
mongoose.Schema.Types.Number.set('default', 0);

const UserSchema = new mongoose.Schema({

	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String, required: true },  //should be hashed
	displayName: String,
	profilePictureUrl: String,
	coverPictureUrl: String,
	aboutBlurb: String,  //store user's 'about' info

//PROPERTIES

	//user properties
	iBriaAdmin: { type: Boolean, default: false }, //is this user a bria admin
	isEmailVerified: { type: Boolean, default: true }, //email verfied?
	//profile properties
	isActive: { type: Boolean, default: true }, //conditional display, no actual deletes! 
	isPrivate: { type: Boolean, default: false }, //true => app hideg identifying info
	isVisible: { type: Boolean, default: true }, //profile (in)vibility status

//LOCATION

	city: String,
	state: String,
	country: String,
	longitude: Number,
	latitude: Number,


// CERTIFICATIONS

	certificationsTotalCount: Number,
	
	BudburstId: String,
	BudburstSpeciesCount: Number,
	Budburst_II_date: Date,  //need 5 budburst observations
	Budburst_III_date: Date,  //add 5 more budburst observations

	eBirdId: String,
	eBirdSpeciesCount: Number,
	eBird_I_date: Date,    //record 5 observations

	iNaturalistId: String,
	iNaturalistspeciesCount: Number,
	iNaturalist_I_date: Date,   // identify 10 or more WILD species on garden property
	iNaturalist_II_date: Date, //1) make 50 observations to become iNaturalist "place"
	//2) set up garden's KML file
		
	
	gardensTable: [{
		_id: mongoose.Types.ObjectId,
	}],

	//placeholder data for future capabilities

	// linksTable: [{
	// 	title: {type: String, required: true},
	// 	url: {type: String, required: true}
	// }],

	// followersTable: [{userId: String}],
	// followingTable: [{userId: String}],

}

	//Schema options
	, { timestamps: true });

module.exports = mongoose.model("User", UserSchema)