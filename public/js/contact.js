function listContacts (){
    axios.get('/list')
    .then((res) => {
        console.log(res)
    })
}