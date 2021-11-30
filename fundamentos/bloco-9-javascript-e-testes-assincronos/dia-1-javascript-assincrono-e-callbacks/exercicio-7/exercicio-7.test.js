// 7 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { test } = require('@jest/globals');
const { uppercase } = require('./exercicio-7')

test('Verifica se não passar teste retorna TESTE', (done) => {
  uppercase('teste', (result) => {
    try {
      expect(result).toBe('TESTE')
      done()
    } catch (error) {
      done(error)
    }
  })
});