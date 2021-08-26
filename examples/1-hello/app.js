
const result = document.querySelector('.result')


const fetchData = async () => {
    try {
        //const {data} = await axios.get('/.netlify/functions/1-hello')
        //select heading and put data in it
        const {data} = await axios.get('/api/1-hello')

        result.textContent = data
    } catch (e) {
        console.log(e.response.data)
        result.textContent = e.response.data

    }
}

fetchData()