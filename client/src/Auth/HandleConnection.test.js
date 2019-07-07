import HandleConnection from "./HandleConnection";

describe('check HandleConnection function', () => {
    it('return false on bad credential',()=>{
        
        HandleConnection("try", "try")
        .then(res=>{
            expect(res).toBe(false);
        })
        
    })
})