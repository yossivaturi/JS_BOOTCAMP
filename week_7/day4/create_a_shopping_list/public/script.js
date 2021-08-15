let form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    // stop form submission
    event.preventDefault();
    // handle the form data
    let shoppingItem = form.elements['shoppingitem'].value;
    let amount = form.elements['amount'].value;
    console.log(form.elements['shoppingitem'].value)
    console.log(form.elements['amount'].value)

    let userdata = {
        shoppingItem: shoppingItem,
        amount: amount
    };

    fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // document.getElementById('root').innerHTML = `${data}`
        })
        .catch(err => {
            console.log(err);
        })


});