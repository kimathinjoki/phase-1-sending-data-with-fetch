// Add your code here
const url = "http://localhost:3000/users"

// const configData ={
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify({
//         name: `${user}`,
//         emailID: `${email}`

//     })
// }


function submitData(jina,mail){
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: `${jina}`,
            email: `${mail}`

        })
    })
    .then(response=>response.json())
    .then(data=>{
        const div = document.createElement('div');
        const bdy = document.querySelector('body');
        div.innerHTML=`
        <li>${data.name}</li>
        <li>${data.email}</li>
        <li>${data.id}</li>
        `
        bdy.appendChild(div)

    })
    .catch((error)=>{

        alert("Opps! Check your fetch")
        console.log(error.message)
        div.innerHTML =`<h3>${error.message}</h3>`
    })
}

// submitData()