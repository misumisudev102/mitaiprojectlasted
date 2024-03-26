const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

const fileEnc = 'dao.js';

const code = fs.readFileSync(fileEnc, 'utf8');
let encodedCode = code;

const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  rotateStringArray: true,
  selfDefending: true
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Vui lòng nhập số lần cần enc: ', (solan) => {
  console.log(`Đang tiến hành encode trong file ${fileEnc} Với số lần enc là: ${solan}`);
  
  const startTime = new Date();
  
  for (let i = 0; i < solan; i++) {
    encodedCode = JavaScriptObfuscator.obfuscate(encodedCode, obfuscatorOptions).getObfuscatedCode();
  }
  
  const endTime = new Date();
  console.log('Total encoding time:', formatTime(endTime - startTime));
  
  fs.writeFileSync('enc.txt', encodedCode);
  console.log(`Đã enc thành công code trong file ${fileEnc} với số lần là ${solan}`);
console.log("Tool encode cre by: Nguyễn Đức Tài");
  
  try {
    eval(encodedCode);
    console.log('Đoạn code vừa enc hoạt động bình thường');
  } catch (error) {
    console.error('Đoạn code vừa enc không thể hoạt động:', error);
  }
  
  rl.close();
});

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const minutes = Math.floor(milliseconds / 60000) % 60;
  const hours = Math.floor(milliseconds / 3600000);
  return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
