let login = prompt("Enter username" , '');
if(login == "Admin"){
    let pass = prompt("Enter password" , '');
    if(pass == "TheMaster"){
        alert("Welcome");
    }else if(pass == "" || pass == null ){
        alert("Cancelled");
    }else{
        alert("Wrong Password")
    }
}else if(login == "" || pass == null ){
    alert("Cancelled");
}else{
     alert(`I don't know you`);
}