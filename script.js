const gettable = async()=>{
    const api = 'https://fakestoreapi.com/products';
    try {
        const data = await fetch(api);
        const realdata  = await data.json();
        let tableData = "";
        realdata.map((value)=>{
            tableData+=`<tr>
            <td>${value.title}</th>
            <td>${value.description}</td>
            <td>${value.price}</td>
            <td><img src="${value.image}" alt=""></td>
            </tr>`
});
document.getElementById('thistable').innerHTML = tableData;
} catch (error) {
    console.log(error);
}

};

gettable();