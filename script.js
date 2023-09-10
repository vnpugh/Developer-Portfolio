let messages = ["Hello, World!👋","Hola, Mundo!🌍","Bonjou, Mond!👋", "Waah Gwaan, World!🏖️", "Nopp naa, xam neeg!👋", "안녕, 세계!🤘", "Habari, Dunia!✌️", "Γειά σας, κόσμε🖖", "Ciao, Mondo!🌎", "Marhaban bil 'Alam👋", "Kamusta, Mundo!🌎"];
let messageIndex = 0;

function changeMessage() {
   let helloElement = document.getElementById("helloMessage");
    helloElement.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;
}

// Automatically change the message every 2 seconds (2000 milliseconds)
setInterval(changeMessage, 2000);
