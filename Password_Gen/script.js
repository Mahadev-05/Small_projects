function generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '0123456789'.split('');
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

    const nrLetters = parseInt(document.getElementById('letters').value);
    const nrSymbols = parseInt(document.getElementById('symbols').value);
    const nrNumbers = parseInt(document.getElementById('numbers').value);

    let password = [];

    for (let i = 0; i < nrLetters; i++) {
        password.push(letters[Math.floor(Math.random() * letters.length)]);
    }
    for (let i = 0; i < nrSymbols; i++) {
        password.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    for (let i = 0; i < nrNumbers; i++) {
        password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    // Shuffle password array
    password = password.sort(() => 0.5 - Math.random());

    document.getElementById('password').textContent = password.join('');
}
