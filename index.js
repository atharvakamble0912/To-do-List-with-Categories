todomain();

function todomain() {
    let inputElem, ulElem;
    getElements();
    addListeners();

    function getElements() {
        inputElem = document.getElementsByTagName("input")[0]; // Get the first input element
        ulElem = document.getElementsByTagName("ul")[0]; // Get the first ul element
    }

    function addListeners() {
        inputElem.addEventListener("change", onChange, false);
    }

    function onChange(event) {
        let inputval = this.value;//if not workin use inputElem.value

        // ulElem.innerHTML += `<li>${inputval}</li>`; // Use inputval instead of e.target.value

        console.log(inputval);
        inputElem.value = ''; // Clear the input field after adding the item

        let liElem = document.createElement("li");
        liElem.innerHTML = inputval;
        let spanElem = document.createElement("span");
        spanElem.innnerText = "delete"
        spanElem.className = "material-symbols-outlined";
        
        liElem.addEventListener("dblclick", deleteItem, false);
        liElem.appendChild(spanElem);

        ulElem.appendChild(liElem);

        function deleteItem() {
            this.remove();
        }
    }
}
