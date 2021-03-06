import {
	attr,
	Model
} from "EmberData";


/**
 * @class TwitchToken
 * @extends Model
 */
export default Model.extend({
	// pass through
	authorization: attr(),
	user_name: attr( "string" ),
	valid: attr( "boolean" )

}).reopenClass({
	toString() { return "kraken/"; }
});
