import { StudentSvc } from "../../src/api/StudentSvc";
window.onload = async function(){
    let stuSvc = new StudentSvc()
    await stuSvc.createStudent({name:'aaa',bornDate:new Date()});
}