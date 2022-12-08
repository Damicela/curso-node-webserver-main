
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido =  async(role = '') => {
    const existRol = await Role.findOne({role});
    if (!existRol){
      throw new Error(`El role ${role} no esta registrado en la base de datos`)
    }
  }

  const emailExiste = async(correo = '') => {
    
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
      throw new Error(`El correo ${correo} ya esta registrado`);
    }

  }

  const existeUsuarioPorId = async(id) => {
    
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
      throw new Error(`El id ${id} no existe`)
    }

  }

  module.exports = {
    esRoleValido, 
    emailExiste,
    existeUsuarioPorId
  }