const quotesArrayData = []

async function fetchData(){
    const response = await fetch('https://dummyjson.com/quotes?limit=1000')
    const data = await response.json()

    quotesArrayData.push(...data.quotes)
}

function getRandomQuotes(quotesArray){
    return Math.floor(Math.random()*quotesArray)
}

async function getQuotes(){
    quotesArrayData.length = 0;
    await fetchData()
    let randomNumber = getRandomQuotes(quotesArrayData.length)
    document.getElementById('quote').innerHTML = ' " ' + quotesArrayData[randomNumber].quote + ' " '
    document.getElementById('author').innerHTML = ' - ' + quotesArrayData[randomNumber].author
}