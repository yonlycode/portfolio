import GetAdminId from "./GetAdminId"

describe('Check GetAdminId function', () => {
    it('get id if set',()=>{
        let id = "test-id";
        window.localStorage.setItem("adminId",id);
        expect(GetAdminId()).toBe(id);
    })
    it('return no id if no id set',()=>{
        window.localStorage.removeItem("adminId");
        expect(GetAdminId()).toBe("no-id");
    })
})