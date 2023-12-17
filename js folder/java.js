
 var bookmark =document.getElementById("bookmarkName")
 var url =document.getElementById("url")


 website=[]
 if(localStorage.getItem("sites") != null ){
    website = JSON.parse(localStorage.getItem("sites"))
    transport()
 }
 
function siteAdd(){
    var regex = /^[a-zA-z]{1,}$/
    var regex2= /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/

    if(regex.test(bookmark.value) && regex2.test(url.value) ==true){

        var adder ={

            name: bookmark.value,
            url: url.value,
    
        }
        
        website.push(adder)
    
        localStorage.setItem("sites", JSON.stringify(website))
    
        transport()
        clear()
    }else{
        alert("invalid input")
    }

    
  
    
}



function transport(){

    var cartona =""
    for(var i=0; i< website.length; i++){
        cartona += `
        <tr>
        <td>${i}</td>
        <td>${website[i].name}</td>
        <td><a href="https://www.${website[i].url}"><button class="btn btn-warning text-white"><i class="fa-solid fa-eye pe-1 "></i>Visit</button></a></td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger"><i class="fa-solid fa-trash  "></i> Delete</button></td>
    </tr>
    `
    }


    document.getElementById("table1").innerHTML= cartona
}

function clear(){
    bookmark.value=""
    url.value=""
}

function deleteElement(index){

    website.splice(index,1)
    localStorage.setItem("sites", JSON.stringify(website))

    transport()
}

