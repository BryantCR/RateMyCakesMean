const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Auto-Increment
const {CakeSchema} = require( './CakeModel' );

const BakerSchema = new mongoose.Schema({
    firstname: {
    type: String,
    trim: true,
    required: [true, 'Baker name is required'],
    minlength: [3, 'Baker Name length must be greater than 3'],
    unique: false,
    default: ""
    },
    lastname: {
    type: String,
    minlength: [3, 'Baker LastName length must be greater than 3'],
    trim: true,
    default: ""
    },
    image: {
    type: String, 
    default: ""
    },
    ratings: [CakeSchema],
    created_at : {
        type : Date,
    },
});

BakerSchema.plugin(AutoIncrement, {inc_field: 'baker_id'});
const Baker = mongoose.model("bakers", BakerSchema);

const BakerModel = {
    addCake : function( newCake ){
        return Baker.create( newCake );
    },
    getAllCakes : function(){
        return Baker.find();
    },
    getCakeByName : function( title ){
        return Baker.findOne({ title });
    },
    delete : function( title ){
        return Baker.deleteOne({ title });
    },
    updateTask: function(id, data){
        return Baker.findOneAndUpdate({id:id},{$set:data})
    }
};

module.exports = {BakerModel};