function fn(){
    var a=document.getElementById("uname");
    var b=document.getElementById("pass");
    if(a.value.trim()=="" && b.value.trim()==""){
        //alert("Username and Password is required")
        document.getElementById("unameh6").innerHTML="Username  is required"
        document.getElementById("passh6").innerHTML="Password is required"
        a.style.border="1px solid red";
        b.style.border='1px solid red'
        return false;
    }
    else if(b.value.trim()==""){
        // alert(" Password is required")
        document.getElementById('passh6').innerHTML="Password is required"
        return false
    }
    else if(a.value.trim()==""){
        // alert("Username is required")
        document.getElementById("unameh6").innerHTML="Username is required"
        return false
    }
    else if(a.value.trim()=="tejas"&& b.value.trim()=="doke"){
        // alert("Username and password is Matching")
        // document.getElementById("btnh6").innerHTML="Username and Password is matching "
        alert("Username and Password is matching ")

        return true

    }
    else{
        alert("Username and Password is not matching")
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        document.getElementById("btn").style.display="none";

        return false
    }
    
}
