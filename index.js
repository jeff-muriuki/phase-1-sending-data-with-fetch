// Add your code here

function submitData() {
    
   return fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: 'Steve',
        email: 'steve@steve.com'
    })
   })
   .then(res=>res.json())
   .then(data=> {
    const newId = data.id;
    //
    const idElement = document.createElement('p')
    idElement.textContent= `${newId}`
    document.body.appendChild(idElement);

   })
   .catch( error=> {
    const errorMessage= document.createElement('p')
   errorMessage.textContent = error.message;
   document.body.appendChild(errorMessage)
})
}
submitData();
   

