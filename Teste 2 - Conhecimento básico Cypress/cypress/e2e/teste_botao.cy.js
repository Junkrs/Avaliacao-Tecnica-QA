// Teste automatizado em Cypress para o teste 2, do botao
// Desenvolvido por Gabriel Junqueira - 02/08/2025 

// Nome do teste
describe('Teste do botão Enviar', () => {
    // Nome do teste automatizado
    it('Verificar botão e mensagem', () => {
        // Endereço de visita da página simples
        cy.visit('http://127.0.0.1:8080/index.html')

        // Verifica se o botão é encontrado, se está visível, e em seguida "aperta" ele
        cy.contains('button', 'Enviar').should('be.visible').click()

        // Verifica o conteúdo da mensagem de alerta, que ocorre após clicar no botão
        cy.on('window:alert', (texto) => {expect(texto).to.equal('Enviado com sucesso!')
        })
    })
})
