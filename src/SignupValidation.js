function Validation(values){
    let error = { }
        
    if(values.firstname ===""){
        error.firstname = "กรุณากรอกข้อมูล"
    }
    else {
        error.firstname=""
    }


    if(values.lastname ===""){
        error.lastname = "กรุณากรอกข้อมูล"
    }
    else {
        error.lastname=""
    }


    if(values.username ===""){
        error.username = "กรุณากรอกข้อมูล"
    }
    else {
        error.username=""
    }


    if(values.password ===""){
        error.password = "กรุณากรอกข้อมูล"
    }
    else {
        error.password=""
    }

    return error;

}
export default Validation;