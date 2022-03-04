const table = document.getElementById('table')
const errorName = document.getElementById("errorName")
const errorPrice = document.getElementById("errorPrice")
const name = document.getElementById("name")
const description = document.getElementById("description")
const price = document.getElementById("price")

function deleteX () {
for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].cells[3].onclick = function(e)
        {                   
                let index = this.parentElement.rowIndex;
                table.deleteRow(index);
                updateSubTotal();
        }
    }
}

deleteX()

function updateSubTotal () {
    numbers = []
    sum = 0
    for(let i = 1; i < table.rows.length; i++)
        {
            numbers.push(table.rows[i].cells[2].innerHTML)
            }
    for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i])
    }
    document.getElementById("totalsum").innerHTML = "Total = " + sum.toFixed(2)
}

updateSubTotal();

form.addEventListener("submit", function(e){
    if (name.value === '' || name.value == null) {
        e.preventDefault()
        errorName.style.color = "red"
        name.style.borderColor = "red"
        errorName.innerText = "You must provide a name"
    }

    if (price.value == 0 || price.value == null) {
        e.preventDefault()
        errorPrice.style.color = "red"
        price.style.borderColor = "red"
        errorPrice.innerText = "You must provide a price"
    }

    if (price.value != 0 && price.value != null && name.value !== '' && name.value != null) {
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3)
        cell1.textContent = name.value
        cell2.textContent = description.value
        cell3.textContent = price.value
        cell4.textContent = "X"
        cell4.style.color = "red"
        cell4.style.fontWeight = "bold"

        updateSubTotal()
        deleteX()
        e.preventDefault()
        name.value = ''
        description.value = ''
        price.value = null
        errorName.innerText = null
        errorPrice.innerText = null
        name.style.borderColor = null
        price.style.borderColor = null
    }
})
