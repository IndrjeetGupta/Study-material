const container = document.getElementById('container')
const btn = document.getElementById('btn')

let url = 'https://fakestoreapi.com/products'

const fetchData = async() =>{

    try{

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayData(data)

    }
    catch(err){
        console.log(err)

    }

}


const click = () =>{
fetchData()

}
btn.addEventListener('click', click)

function displayData(data){
    container.innerHTML = ''

    data.forEach(element => {

        const cart = document.createElement('div')
        const title = document.createElement('p')
        const image = document.createElement('img')

        title.innerHTML = element.title
        image.setAttribute('src' , element.image)

        cart.append(title, image)
        container.append(cart)
        
    });

}