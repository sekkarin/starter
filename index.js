
let msg = ""

const appendImg =(k=undefined,n=5)=>{
    document.querySelector('.gallery').innerHTML = ""
    for (let index = 0; index <= n; index++) {
        const img = document.createElement('img')
        img.setAttribute('src',`https://source.unsplash.com/255x255/?${k}$sig=${index}`)
        document.querySelector('.gallery').appendChild(img)    
    }
}
function main() {
    const inputText = document.querySelector('input')
    inputText.addEventListener("keypress", (search) => {
        if (search.key == "Enter" && search.target.value != "") {
            msg = search.target.value

            console.log(msg);
            appendImg(k=search.target.value)
        }
    })
    console.log(inputText.value);
}
main()