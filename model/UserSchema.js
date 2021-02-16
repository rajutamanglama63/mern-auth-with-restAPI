// const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    displayName : {
        type : String,
        required : true,
    }, 
    password : {
        type : String,
        required : true,
        minlength : 5
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
    // role : {
    //     type : String,
    //     enum : ['user', 'admin'],
    //     required : true
    // },
    // todos : [{type : mongoose.Schema.Types.ObjectId, ref : 'Todo'}]
})

// userSchema.pre('save', function(next) {
//     if(!this.isModified('password'))
//         return(next);
//     bcrypt.hash(this.password, 10, (err, passwordHash) => {
//         if(err)
//             return next(err);
//         this.password = passwordHash
//         return next();
//     })
// })

// userSchema.methods.comparePassword = function(password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if(err)
//             return cb(err);
//         else {
//             if(!isMatch)
//                 return cb(null, isMatch);
//             return cb(null, this);
//         }
//     })
// }

const User = mongoose.model('User', userSchema);

module.exports = User;