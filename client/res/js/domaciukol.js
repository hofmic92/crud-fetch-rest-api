const info = document.getElementById('info');
const getButton = document.getElementById('get');
const postButton = document.getElementById('post');
const putButton = document.getElementById('put');
const patchButton = document.getElementById('patch');
const deleteButton = document.getElementById('delete');

//1
const getEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user/mojeid', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
getButton.onclick = getEvent;



//2
const getEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/article/java/oop', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
getButton.onclick = getEvent;



//3
const getEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/comment/ixd222', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
getButton.onclick = getEvent;



//4
const postEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { name: "Petr", age: "18"} })

        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
postButton.onclick = getEvent;



//5
const postEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/article', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { title: "oop", category: "java"} })

        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
postButton.onclick = getEvent;



//6
const postEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/category', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { name: "java"} })

        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
postButton.onclick = getEvent;



//7
const putEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ payload: { name: "radek", age: "20"} })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
putButton.onclick = putEvent;



//8
const patchEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({ payload: { id: "123aswq12", name: "Radek" } })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
patchButton.onclick = patchEvent;



//9
const deleteEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/article', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({ payload: { id: "123aswq12"} })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
deleteButton.onclick = deleteEvent;