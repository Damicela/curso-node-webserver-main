
const Role = require('../models/role');
const {Usuario, Categoria, Producto} = require('../models');

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

 const  existeCategoriaPorId = async(id) => {
  
  const existeCat = await Categoria.findById(id);
  
  if(!existeCat){
    throw new Error (`La categoría ${id} no existe`)
  }

 }

 const  existeProductoPorId = async(id) => {
  
  const existeProd = await Producto.findById(id);
  
  if(!existeProd){
    throw new Error (`El producto ${id} no existe`)
  }

 }


 // Validar colecciones permitidas
 const coleccionesPermitidas = (coleccion = '', colecciones = []) => {

  const incluida = colecciones.includes(coleccion);
  if(!incluida){
    throw new Error (`La coleccion ${coleccion} no es permitida. ${colecciones}`);
  }
  return true
 }

  module.exports = {
    esRoleValido, 
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
  }