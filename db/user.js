const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username: { type: String, required: true, unique: true },
  email: { type: String, required: true,unique:true},
  password: { type: String, required: true },
});

// module.exports = mongoose.model('User', userSchema);
//zStSBFj5bAJJolml
mongoose.models={}
module.exports = mongoose.model('NextUser', userSchema);
