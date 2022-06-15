
let endpoint= "";
let payload = "";

describe("appointment_type",()=>{
    
    beforeEach(() => {
        cy.authentication()


        cy.fixture('endpoints.json').then((user) => {
            console.log(user);
            endpoint = user;
          });

          cy.fixture('Appointment_type_payload.json').then((user) => {
            console.log(user);
            payload = user;
          });


    })
    
    
    it("happy_path",()=>{
        
        cy.postcall(endpoint.appointment_type_id, payload).then((res)=>{

            expect(endpoint.appointment_type_id).to.equal('appointment-types')
          
            expect(res.status).to.eq(201)
            cy.log(res.body)
            const id = res.body.id

            cy.getcall(endpoint.appointment_type_id, id).then((res)=>{
            
                expect(res.status).to.eq(200)
                cy.log(res.body)
                payload.id = id;

                cy.putcall(endpoint.appointment_type_id, id, payload).then((res)=> {
                
                    expect(res.status).to.eq(200)
                    cy.log(res.body)


                    cy.deletecall(endpoint.appointment_type_id, id).then((res)=>{
                        
                        expect(res.status).to.eq(200)
                    })
                })

                      
                
            })

            
                
            
        })
    })
      

})

