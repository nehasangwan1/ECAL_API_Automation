/// <reference types="Cypress" />


Cypress.Commands.add("getcall",(url,id="")=> {
    cy.request({

        method: "GET",
        url: url + (id ? ("/" + id) : ""),
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")).body.message,
          "X-tenantId": Cypress.env("tenantId")
      }


     }).then((res)=> {
        //  cy.log(res)
     })

})


Cypress.Commands.add("putcall",(url,id="",body)=> {

    cy.request({

        method: "PUT",
        url: url + "/" + id,
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")).body.message,
          "X-tenantId": Cypress.env("tenantId")
          },
        body: body
     })

})


Cypress.Commands.add("postcall",(url,body)=> {

    cy.request({

        method: "POST",
        url: url,
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")).body.message,
          "X-tenantId": Cypress.env("tenantId")
      },
        body: body

     })

})


Cypress.Commands.add("deletecall",(url,id="")=> {

    cy.request({

        method: "DELETE",
        url: url +  "?ids=" + id,
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")).body.message,
          "X-tenantId": Cypress.env("tenantId")
      }


     })

})