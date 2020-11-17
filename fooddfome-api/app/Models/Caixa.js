'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Caixa extends Model {
  static getFormaPagamento(){
    return['nome', 'telefone', 'endereco', 'email', 'cnpj']
  }
}

module.exports = Caixa
