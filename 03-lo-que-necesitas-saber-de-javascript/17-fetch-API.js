const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then((response) => response.json())
  .then(data => console.log(data))

fetch(url, {
  method: 'POST', // GET, POST, PUT, PATCH, DELETE
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer acadebeieseexistiruntokendeautorizacion'
  }, 
  body: JSON.stringify({
    name: 'Chanchito Feliz', 
    website: 'google.com'
  }) 
})
  .then((res) => res.json()) // Promesas antiguas
  .then(data => console.log(data)) // Promesas antiguas

const fn = async() => {
  const response = await fetch(url, {
    method: 'POST', // GET, POST, PUT, PATCH, DELETE
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer acadebeieseexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
      name: 'Chanchito feliz',
      website: 'google.com'
    })
  })
  const data = await response.json()

  console.log(data)
}

