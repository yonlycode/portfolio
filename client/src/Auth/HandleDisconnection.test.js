import HandleDisconnection from "./HandleDisconnection";
import GetToken from "./GetToken";
import GetAdminId from "./GetAdminId";

describe('Check HandleDisconnection function', () => {

    it('delete admin id',()=>{
        HandleDisconnection();
        expect(GetAdminId()).toBe("no-id");
    });

    it('delete token',()=>{
        HandleDisconnection();
        expect(GetToken()).toBe("no-token");
    });
    
    it('return true on success',()=>{
        window.localStorage.removeItem("token");
        expect(HandleDisconnection()).toBe(true);
    });

    
})