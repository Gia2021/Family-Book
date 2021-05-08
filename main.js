var images=["Family Book.jpeg", "Me.jpg", "Lipi.jpeg", "Hemant.jpeg", "Mother.jpg", "Bua.jpg", "Amma.JPG", "Nana.jpg"];
var names = ["Family Book","Me","Lipi","Father","Mother","Bua","Amma","Nana"];
var i= 0;
function update(){
    i++;
    var noofmem= 7;
    if (i > noofmem){
        i=0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("fambook").src = updateImage;
    document.getElementById("famt").innerHTML = updateName;
}