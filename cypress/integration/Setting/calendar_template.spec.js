/// <reference types="cypress" />


let endpoint= "";
let payload = "";

describe("calendar_tempalte",()=>{

    beforeEach(() => {
        cy.authentication()

        cy.fixture('endpoints.json').then((user) => {
          console.log(user);
          endpoint = user;
        });

        cy.fixture('calendar_template_payload.json').then((user) => {
          console.log(user);
          payload = user;
        });
    })

    it("happy_path",()=>{

      cy.postcall(endpoint.Calendar_templates_id, payload).then((res)=>{

        expect(res.status).to.eq(201)
        cy.log(res.body)
        const id = res.body.id

        payload.id=id

       cy.putcall(endpoint.Calendar_templates_id, payload.id, payload).then((res)=>{

        expect(res.status).to.eq(200)
        cy.log(res.body)

      })

      cy.getcall(endpoint.Calendar_templates_id, id).then((res)=>{

        expect(res.status).to.eq(200)
        cy.log(res.body)

      })

      cy.deletecall(endpoint.Calendar_templates_id, id).then((res)=>{

        expect(res.status).to.eq(200)
        cy.log(res.body)
      })

    })

})

})