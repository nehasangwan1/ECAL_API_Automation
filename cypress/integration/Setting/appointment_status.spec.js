/// <reference types="cypress" />


let endpoint= "";
let payload = "";

describe("appointment-statuses",()=>{

    beforeEach(() => {
        cy.authentication()

        cy.fixture('endpoints.json').then((user) => {
          console.log(user);
          endpoint = user;
        
        });

        cy.fixture('Appointment_status_payload.json').then((user) => {
          console.log(user);
          payload = user;
        
        });
    })

it("get_put",()=> {
    
      cy.getcall(endpoint.status_id, 1).then((res)=>{
       
        expect(res.status).to.eq(200)
        cy.log(res.body);
        cy.log(res.body.id);

        cy.putcall(endpoint.status_id, payload.id , payload).then((res)=>{

          expect(res.status).to.eq(200)
          cy.log(res.body)
  
        })

      })


})


})
