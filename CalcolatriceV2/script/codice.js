let operation = "";

function reload() {
    document.getElementById("value").value = operation
}

function setValue(value) {
    operation+=value
    reload()
}

function del() {
    operation = operation.substring(0, operation.length-1)
    reload()
}

function calc() {
    operation = document.getElementById("value").value

    operation = operation.replace(/\s/g, '') // la g finale rende l'espressione tra / / globale || codice escape s per spazio
    for (let i=0; i<operation.length;i++) {
        if (operation[i] == '+') {
            operation = String(parseFloat(operation.substring(0, i)) + parseFloat(operation.substring(i+1, operation.length)))
        } else if (operation[i] == '-') {
            operation = String(parseFloat(operation.substring(0, i)) - parseFloat(operation.substring(i+1, operation.length)))
        } else if (operation[i] == '*') {
            operation = String(parseFloat(operation.substring(0, i)) * parseFloat(operation.substring(i+1, operation.length)))
        } else if (operation[i] == '/') {
            operation = String(parseFloat(operation.substring(0, i)) / parseFloat(operation.substring(i+1, operation.length)))
        }
        reload()
    }
}
