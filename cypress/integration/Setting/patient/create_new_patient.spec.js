
/// <reference types="cypress" />


describe("Create a new patient and get details",()=>{

    it("Create patient and fetch patient ID",()=>{

        cy.request({

            method:"POST",
            url:"https://t-ecal-master.kipuworks.com/patients",
            body:{
                "patient[first_name]":"Aman",
                "patient[last_name]": "Juneja",
                "patient[auto_submit]": "Add patient"
            }
        })

    })
})