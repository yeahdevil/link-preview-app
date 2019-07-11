var input = document.getElementById("message");
input.addEventListener("keyup",function checklink(){
    var url = document.getElementById("message").value;
    var output = document.getElementById("output");
    $.ajax({
        "url":"/",
        "type": "POST",
        "data":{ 
            url: url,
        },
        "success": function(data){
            if(!data.loadFailed){
                output.innerHTML="";
                var link = document.createElement("a");
                var div = document.createElement("div");
                div.setAttribute("class","jumbotron jumbotron-fluid");
                div.setAttribute("style","padding:2rem 1.5rem;height:170px;margin:1rem");
                link.setAttribute("href",data.url);
                if(data.images[0]){
                var image = document.createElement("img");
                image.setAttribute("src",data.images[0]);
                image.setAttribute("class","card-img-top");
                image.setAttribute("alt","Card image cap");
                image.setAttribute("style","height:100px;width:100px;float:left;border-radius:10%;");
                div.appendChild(image);
                 }
                
                var div2 = document.createElement("div");
                div2.setAttribute("class","container");
                if(data.title){
                var tittle = document.createElement("h5");
                tittle.setAttribute("class","display-8");
                tittle.innerHTML = "<b>"+data.title+"</b>";
                div2.appendChild(tittle);
            }
            if(data.description){
                var desc = document.createElement("p");
                desc.innerHTML =data.description;
                desc.innerHTML = desc.innerHTML.substring(0,200) + "..... <br>Read More=>";
                desc.setAttribute("class","font-weight-light");
                div2.appendChild(desc);
            }         
                div.appendChild(div2);
                link.appendChild(div);
                output.appendChild(link);

            }
            else{
                output.innerHTML="";
                var tittle = document.createElement("h1");
                tittle.innerHTML = "not a link";
                output.appendChild(tittle);
            }
        }
    })
})
