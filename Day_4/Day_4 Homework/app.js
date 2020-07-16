const usernameInputElement = document.getElementById('username')
console.log(usernameInputElement);

usernameInputElement.addEventListener('keyup', (e) => {
    console.log("keyup..." , e);
    // const username = e.target.value;
    // console.log(username, username2)
    //do the same thing

    const url = "https://api.github.com" + username;
    console.log(url);

//     fetch(url).then(response => {
//         console.log(response);
//         response
//             .json()
//             .then(userData);
//         })
//         .catch(err) => {
//             console.log(err);
//          })
//     })
//     .catch(err) =>  console.log(err);
//     // .catch(err) => console.log(err);
//     //what he has in his code
// });

    try {
        const response = await fetch(url);
        console.log(response);
        const userData = await response.text();
        console.log(userData)

        const profileElement = document.getElementById("profile");
        profileElement.innerHTML = 
            <div>${userData.company}</div>
            <img src="${usesrData.avatar_url}"> </img>
     ;
    } catch (err) {
        console.log(err);
    }
});