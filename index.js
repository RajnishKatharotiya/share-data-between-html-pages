function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);

    return;
}