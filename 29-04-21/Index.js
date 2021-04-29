
document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

function fetchUserData()
{
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
       // .then(users => console.log(users))
        .then(users => {
          let output = '<h2>Lists of Users are:</h2>';
           output += '<ol>';
            users.forEach(function(user) {
                console.log(users)
                output += `
                   <li>
                        ${user.name}
                    </li>
                `
                ;
            });    
            output += '</ul>'
            document.getElementById("response").innerHTML = output;
        });
}
