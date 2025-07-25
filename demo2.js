function T1()
{
    var username=document.getElementById("A").value
    var p1=document.getElementById("B").value
    var p2=document.getElementById("C").value
    var obj1=username.match(/[A-Z]{1}[a-z]*[_]{1}[0-9]{5}/g)
    var obj2=p1.match(/[A-Z]{1}[_]{1}[0-9]{7}/g)
    var obj3=p2.match(/[A-Z]{1}[_]{1}[0-9]{7}/g)
    if(username=="" || username==null)
    {
        window.alert("Username is required...")
        document.getElementById("ABC").innerHTML="*** Username is required ***"
        return false
    }
    else if(obj1=="" || obj1==null)
    {
        window.alert("In_valid username")
        document.getElementById("ABC").innerHTML=username+" "+"In_valid username Ex:User_12345"
        return false
    }
    if(p1=="" || p1==null)
    {
        window.alert("Password is required")
        document.getElementById("abc").innerHTML="*** Password is required ***"
        return false
    }
    else if(obj2=="" || obj2==null)
    {
        window.alert("In_valid Password")
        document.getElementById("abc").innerHTML=p1+" "+"*** In_valid Password Ex:U_1234567***"
        return false
    }
    if(p2=="" || p2==null)
    {
        window.alert("Confirm_Password is required")
        document.getElementById("xyz").innerHTML="*** Confirm_Password is required ***"
        return false
    }
    else if(obj3=="" || obj3==null)
    {
        window.alert("In_valid Confirm_Password")
        document.getElementById("xyz").innerHTML=p2+" "+"*** In_valid Confirm_Password Ex:U_1234567***"
        return false
    }
}