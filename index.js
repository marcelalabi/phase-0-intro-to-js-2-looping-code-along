function writeCards(names, eventName) {
    var messages = []; 
    for (var i = 0; i < names.length; i++) {
        var message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; 
        messages.push(message); 
    }
    return messages; 
}
function countDown(number) {
    while (number > -1) {
        console.log(number--);
    }
}