/// <reference types="cypress" />


let endpoint= "";
let payload = "";


describe("communication", ()=>{

    beforeEach(() => {
        cy.authentication()

        cy.fixture('endpoints.json').then((user) => {
            console.log(user);
            endpoint = user;
          });

          cy.fixture('communication_payload.json').then((user) => {
            console.log(user);
            payload = user;
          });
    })

it("happy_path", ()=>{ 

      cy.postcall(endpoint.communication_id, payload).then((res)=>{

        expect(res.status).to.eq(201)
        cy.log(res.body)
        const id = res.body.id
            
        payload.id= id
     cy.putcall(endpoint.communication_id , id, payload).then((res)=>{

        expect(res.status).to.eq(200)
        cy.log(res.body)
     })


     cy.getcall(endpoint.communication_id, id ).then((res)=>{

        expect(res.status).to.eq(200)
        cy.log(res.body)
     })
 
    cy.deletecall(endpoint.communication_id, id).then((res)=>{


        expect(res.status).to.eq(200)
        cy.log(res.body)
    })
    
      })
    })
})
