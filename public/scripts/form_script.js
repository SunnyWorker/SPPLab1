const form = document.getElementById("form");
const name = document.getElementById("name");
const address = document.getElementById("address");
const capacity = document.getElementById("capacity");
const price = document.getElementById("radio-label-name");
const link = document.getElementById("link");
const image = document.getElementById("image");

const nameError = document.getElementById("nameError");
const linkError = document.getElementById("linkError");
const performClick = async (host,redirect,method,aim) => {
    try {
        const formData = new FormData(form);
        let correct = true;
        if(formData.get('name')==="") {
            name.setCustomValidity("Необходимо ввести!");
            correct = false;
        }
        else name.setCustomValidity("");
        if(formData.get('address')==="") {
            address.setCustomValidity("Необходимо ввести!");
            correct = false;
        }
        else address.setCustomValidity("");
        if(formData.get('capacity')==="") {
            capacity.setCustomValidity("Необходимо ввести!");
            correct = false;
        }
        else capacity.setCustomValidity("");
        if(formData.get('price')==undefined) {
            price.style.color = "#CC0000";
            correct = false;
        }
        else price.style.color = "black";
        if(formData.get('link')==="") {
            link.setCustomValidity("Необходимо ввести!");
            correct = false;
        }
        else link.setCustomValidity("");
        if(aim==="add" && formData.get('image').name==="") {
            image.setCustomValidity("Необходимо ввести!");
            correct = false;
        }
        else {
            image.setCustomValidity("");
        }
        if(correct) {
            const response = await fetch('http://' + host + redirect, {
                method: method,
                body: formData
            })
            if (response.status === 200) {
                window.location.replace('http://' + host + '/' + formData.get('link'));
            } else {
                let body = await response.json();
                if (body.errors.linkExistsError !== undefined) {
                    linkError.style.display = 'block';
                    linkError.textContent = body.errors.linkExistsError;
                } else {
                    linkError.style.display = 'none';
                }
                if (body.errors.nameExistsError !== undefined) {
                    nameError.style.display = 'block';
                    nameError.textContent = body.errors.nameExistsError;
                } else {
                    nameError.style.display = 'none';
                }
            }
        }
    } catch (errors) {
        console.error(errors);
    }
};
