const filter = document.getElementById('filter')
const list = document.querySelector('#list')

let USERS = []

filter.addEventListener('input', (event)=> {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)
    })
    render(filteredUsers)
})
async function start() {
    list.innerHTML='Loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(()=>{
            USERS = data
            render(data)}
        ,2000)


    } catch (err) {
        list.innerHTML = 'Error. Come back later'
    }
}
  function render (users=[]) {
    if(users.length ===0) {
        list.innerHTML = 'No users found'
    } else{list.innerHTML= users.map(toHTML).join('')}

  }
  function toHTML(user) {
    return `<li class="list-group-item" >${user.name}</li>`

  }
     start()
