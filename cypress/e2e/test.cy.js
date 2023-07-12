describe("Pop-ups, alerts tutorial", ()=>{
    it("hello", ()=>{
        cy.visit('http://3.235.247.137:8087/JenkinsPipelineSetupDemo/#/ManageAccounts');
   cy.get('[name="Account"]').eq(1).should('have.text', 'Account : Current account')




    
    });
});

