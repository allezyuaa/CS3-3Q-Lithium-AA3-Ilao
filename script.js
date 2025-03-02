function condiFunc() {
    let message = prompt('Enter a message: ');

    if (message.includes("FR") && message.includes("AI")) {
        document.getElementById('result').innerHTML = `The message "${message}" is legitimate.`;
    } 
    else if (message.includes("AI") || message.includes("aI") || message.includes("Ai")) {
        document.getElementById('result').innerHTML =`The message "${message}" is tampered with.`;
    } 
    else if (message.includes("FR")) {
         document.getElementById('result').innerHTML = `The message "${message}" is legitimate.`;
    } 
    else {
         document.getElementById('result').innerHTML =`The message "${message}" is yet to be encoded.`;
    }
}
