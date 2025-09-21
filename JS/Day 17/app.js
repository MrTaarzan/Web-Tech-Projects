let url = "https://fakestoreapi.com/products";
async function fetchProducts(url){
    let res = await fetch(url,{method:"get"});
    console.log(res);
    let data = await res.json();
    console.log(data);
    displayData(data);
}
fetchProducts(url);

function displayData(data){
    let tbody = document.getElementById("tbody");
    let tfoot = document.getElementById("tfoot");
    tbody.innerHTML="";
    let total = 0;
    for(let i=0 ; i<data.length ; i++){
    tbody.innerHTML+= `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].category}</td>
                <td>${data[i].title}</td>
                <td><img src="${data[i].image}" alt="" width="100px" height="100px"></td>
                <td>${data[i].description}</td>
                <td>${data[i].rating.rate}</td>
                <td>${data[i].rating.count}</td>
                <td>$${data[i].price}</td>
            </tr>
`
total+=data[i].price;
tfoot.innerHTML=`
<td colspan="7">Total</td>
<td>$${total}</td>`
    }
}