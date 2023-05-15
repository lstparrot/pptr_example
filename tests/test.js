import Login from '../package_for_tests/Login'


describe('END-to-END', ()=>{

    let login;


    beforeAll(async ()=>{
        jest.setTimeout(() => {
        }, 20000);
        login = new Login()
    
    })


    test('Login', async()=>{
        login.visit()
        login.feelform()
    })
})