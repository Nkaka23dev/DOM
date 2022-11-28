const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const setText = (text) => {
    h1.textContent = text;
}

const checkAuth = cb => {
    setText("Checking Auth.....");
    setTimeout(() => {
        cb(true)
    }, 2000)
}
 
const fetchAuth = cb => {
    setText("Fetching user....");
    setTimeout(() => {
        cb({name: "Nkaka"})
    }, 2000)
}
button.addEventListener("click", () => {
    checkAuth(auth => {
        if(auth){
            fetchAuth(user => {
                setText(user.name)
            })
        }
    })
})