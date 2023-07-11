describe("Pop-ups, alerts tutorial", ()=>{
    it("hello", ()=>{
        cy.visit('http://18.213.247.80:8095/JenkinsPipelineSetupDemo/#/ManageAccounts');
   cy.get('[name="Account"]').eq(1).should('have.text', 'Account : Current account')




    
    });
});

