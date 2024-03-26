const fs = require('fs');

function removeQuotesAndSaveContent(inputString, outputFileName) {
  const regex = /"([^"]*)"/g;
  let match = regex.exec(inputString);
  let outputContent = '';

  if (!match) {
    console.log(`Không có nội dung tring ${inputFilePath} vui lòng nhập nội dung và dấu cần tách để thực thi.`);
    return;
  }

  while (match !== null) {
    const content = match[1];

    if (content.length > 0) {
      outputContent += content + '\n';
    }

    match = regex.exec(inputString);
  }

  fs.writeFileSync(outputFileName, outputContent.trim());
  console.log(`Đã tách dấu "" vui lòng vào file ${outputFile} để lấy nội dung vừa tách.`);
}

const inputFilePath = './tachdau.txt';
const inputFileContent = fs.readFileSync(inputFilePath, 'utf8');
const outputFile = './data.txt';

removeQuotesAndSaveContent(inputFileContent, outputFile);