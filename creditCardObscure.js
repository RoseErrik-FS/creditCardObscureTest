const readline = require("readline");

function obscureCreditCard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please enter your credit card number: ", (cardNumber) => {
    if (!/^\d+$/.test(cardNumber)) {
      console.log("Invalid Credit Card");
    } else {
      const cardLength = cardNumber.length;
      if (cardLength < 12 || cardLength > 16) {
        console.log("Invalid Credit Card");
      } else {
        const obscured = "*".repeat(cardLength - 4) + cardNumber.slice(-4);
        console.log("Obfuscated Credit Card:", obscured);
      }
    }

    rl.close();
  });
}

//obscureCreditCard();

module.exports = obscureCreditCard;
