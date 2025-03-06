

const NapraviNasumicnogPsa = async () => {

    try{
    let fetchfunc = await fetch('https://dog.ceo/api/breeds/image/random')
    let data =await  fetchfunc.json()
    console.log(data.message)
    let a = document.createElement('img')
    a.src = data.message
    let div = document.querySelector('.goku')
    div.appendChild(a)
    }

    catch(err) {
        console.error(err);
        
    }
}

let dugme = document.querySelector('.eventbutton')
dugme.addEventListener('click',function() {

    let div = document.querySelector('.goku')
    div.innerHTML = ''
    NapraviNasumicnogPsa()
})
