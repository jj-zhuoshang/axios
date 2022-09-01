import { StudentCreateVm } from "../entities/StudentDataInterface";
import { Request } from "../tools/Request";

export class StudentSvc{
    createStudent(data:StudentCreateVm){
        let req = new Request();
        console.log(123,data);
        
        return req.post("students/createStudent",data);
    }
}

