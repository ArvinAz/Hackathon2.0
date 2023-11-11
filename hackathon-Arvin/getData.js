var storedObject = JSON.parse(localStorage.getItem('user'));
console.log(storedObject);
htmlname1 = document.querySelector(".huser");
htmlpass1 = document.querySelector(".hpass");
htmlname1.textContent = storedObject.name;
htmlpass1.textContent = storedObject.pass;
console.log(storedObject.name);