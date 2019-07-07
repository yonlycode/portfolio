import GetToken from "./GetToken";

describe('Check GetToken function', () => {
    it('get token if set',()=>{
        let token = "test-token";
        window.localStorage.setItem("token",token);
        expect(GetToken()).toBe(token);
    })
    it('return "no-token" if not set',()=>{
        window.localStorage.removeItem("token");
        expect(GetToken()).toBe("no-token");
    })
})