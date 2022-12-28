fetch('http://192.168.3.141:3000/api/users/78')
.then(res => res.json())
.then(data => console.log(data))