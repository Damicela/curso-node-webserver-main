

const {Schema, model} = require('mongoose');

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'El role no es obligatorio']
    }

});


module.exports = model('Role', RoleSchema)
