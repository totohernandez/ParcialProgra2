function processForm(){
    var table = document.getElementById("myTable")
    var quantity = document.getElementById('quantity').value
    
    var row = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")

    td1.innerHTML = document.getElementById("date").value
    td2.innerHTML = document.getElementById("drink").value
    td3.innerHTML = document.getElementById("quantity").value
    if (quantity < 8){
       td4.innerHTML = "Tomar mas agua"
    } else {
       td4.innerHTML = "Meta alcanzada"
    }
    
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)

    table.children[0].appendChild(row)
}