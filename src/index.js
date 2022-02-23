const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  
    let code = [],
        morse = [];
    for (let i = 0; i < expr.length-1; i += 10) {
      code.push(expr.slice(i,i + 10))
    };
    morse = code.map(el => {
      return el.replace('**********', ' ')
              .replace(/00/g, '')
              .replace(/10/g, '.')
              .replace(/11/g, '-')
    });
    MORSE_TABLE[' '] = ' ';
    let text = morse.map(elem => MORSE_TABLE[elem]);
      return text.join('')
  }

module.exports = {
    decode
}