var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var errString = "Path `{PATH}` ({VALUE}) can only be Character(-/*().!:),Number,Chinese or English character,length ";

var nameReg = [/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9,\-\s().!:*/]{1,8}$/,errString+"1-8"];
var titleReg = [/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9,\-\s().!:*/]{1,30}$/,errString+"1-30"];
var detailTextReg = [/^[\s\S]{1,300}$/,"Path `{PATH}` ({VALUE}) can only be length 1-300"];

var productSchema = new Schema({
	name:{type:String,match:nameReg,required:true,trim:true},
	title:{type:String,match:titleReg,required:true,trim:true},
	mainImg:{type:String,required:true},
	salePrice:{type: Number, min:0, max:999999,required:true},
	sold:{type: Number, min:0, max:999999,required:true},
	detailText:{type:String,match:detailTextReg,required:true,trim:true},
	regDate:{type: Date,default: Date.now},
});

module.exports = mongoose.model('Product', productSchema);