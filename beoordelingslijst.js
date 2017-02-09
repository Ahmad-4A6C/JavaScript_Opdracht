function cijfers(nummer) {
            if (nummer > 0 && nummer <50){
                return "onvoldoende"
            }else{
                if(nummer >=50 && nummer <60) {
                    return "matig"
                } else{
                    if(nummer >=60 && nummer <75) {
                        return "voldoende"
                    } else if (nummer >=75 && nummer <101) {
                       return "goed"
                    }
                    
                }
            }
        }


function functie1() {
    var cijfer = document.getElementById("cijfer1").value;
    
    var numbers = cijfers(cijfer);
            
    document.getElementById("resultaat").innerHTML += "- Het cijfer is " + cijfer + " en is dus "+ numbers+"<br>";  
}
function functie2() {
    var cijfer = document.getElementById("cijfer2").value;
    
    var numbers = cijfers(cijfer);
            
    document.getElementById("resultaat").innerHTML += "- De beoordeling is "+ numbers + ", want het cijfer is "+cijfer+"<br>"; 
}

