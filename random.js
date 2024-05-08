var container = document.querySelector(".container");

async function fetchData(){
    const res = await fetch('https://www.boredapi.com/api/activity', {method: "GET"})
   const data = await res.json()

const dataArr = [];
dataArr.push(data)
console.log(dataArr)

dataArr.map((item)=>{
    return(
        container.innerHTML += `
        <h1>${item.activity}</h1>
        <p>Type: ${item.type}</p>
        <p>Participants: ${item.participants}</p>
        <p>Price: ${item.price}</p>
        <p>Key: ${item.key}</p>
        <p>Accessibility: ${item.accessibility}</p>
        <p>Link: ${item.link}</p>
        `
    )
})
}