

const result = document.querySelector('.result')

const fetchProducts = async ()=>{

    result.innerHTML = `<h2>Loading...</h2>`

    try {
        const id = window.location.search
        //axios.get will return what we need as ?id=rec3Ccaa1s0lmQVZu
        const {data:{fields}} = await axios.get(`/api/3-z-complete${id}`)
        const {name, artist,price,image} = fields
        result.innerHTML = `<h1 class="title">${name}</h1>
                            <article class="product">
                                <img class="product-img"
                                src="${image[0].url}"
                                alt="${name}"
                                />
                                <div class="product-info">
                                <h5 class="title">${name}</h5>
                                <h5 class="price">$${price}</h5>
                                <p class="artist">${artist}</p>
                                </div>
                            </article>`

    } catch (error) {
        result.innerHTML = `<h2>${error.response.data}</h2`
    }
}

fetchProducts()