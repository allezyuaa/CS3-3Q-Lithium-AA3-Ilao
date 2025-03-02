function condiFunc() {
    let message = prompt('Enter a message: ');

    if (message.includes("FR") || (message.includes("FR") && message.includes("AI"))) {
        if (message.includes("aI") || message.includes("Ai")) {
            document.getElementById('result').innerHTML =`The message "${message}" is tampered with.`;
        }
        document.getElementById('result').innerHTML = `The message "${message}" is legitimate.`;
    } 
    else if (message.includes("AI")) {
        document.getElementById('result').innerHTML =`The message "${message}" is tampered with.`;
    }
    else {
         document.getElementById('result').innerHTML =`The message "${message}" is yet to be encoded.`;
    }
}
