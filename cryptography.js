let start = 65;
let end = 90;

function encrypt()
{
    let plainText = document.getElementById('plainText').value + "";
    let key = document.getElementById('privateKey1').value + "";

    let cipherTextResult = "";

    let plainTextLen = plainText.length;
    let keyLen = key.length;
    
    if (keyLen != plainTextLen) 
    {
        document.getElementById('encryption_result').innerText = "Private key length should be equal to plain text Length";
        return;
    }

    let subtractVal = end - start;
    let totalChar = subtractVal + 1;

    for (let charIndex = 0; charIndex < keyLen; charIndex++) {

        let startTemp = start;
        let endTemp = end;

        let keyCharCode = key.charAt(charIndex).charCodeAt(0);

        for (let i = 0; i < totalChar; i++) {

            let inc = 0;
            let runningIndex = 0;
            let currentCharCode = start + i;

            if (keyCharCode == currentCharCode)
            {
                let plainTextCharCode = plainText.charAt(charIndex).charCodeAt(0);
                let plainTextCharCodeIndex = plainTextCharCode - start;
                
                for (let j = startTemp; j <= endTemp; j++) {
                    let character = 0;
                    if (j > end)
                    {
                        character = end - subtractVal + inc;
                        inc++;
                    }
                    else character = j;
                    
                    if (runningIndex == plainTextCharCodeIndex)
                    {
                        cipherTextResult += String.fromCharCode(character);
                    }

                    runningIndex++;
                }
            }

            startTemp++;
            endTemp++;
        }
    }

    document.getElementById('encryption_result').innerText = "Cipher: "+cipherTextResult;
}

function clearEncryptionInput()
{
    document.getElementById('plainText').value = "";
    document.getElementById('privateKey1').value = "";
    document.getElementById('encryption_result').innerText = "";
    encCntCompare();
}

function decrypt()
{
    let cipher = document.getElementById('cipherKey').value + "";
    let key = document.getElementById('privateKey2').value + "";
    
    let plainTextResult = "";

    let cipherLen = cipher.length;
    let keyLen = key.length;

    if (keyLen != cipherLen) 
    {
        document.getElementById('decryption_result').innerText = "Private key length should be equal to cipher Length";
        return;
    }

    let subtractVal = end - start;
    let totalChar = subtractVal + 1;

    for (let charIndex = 0; charIndex < keyLen; charIndex++) {

        let startTemp = start;
        let endTemp = end;

        let keyCharCode = key.charAt(charIndex).charCodeAt(0);

        for (let i = 0; i < totalChar; i++) {
            
            let inc = 0;
            let runningIndex = 0;
            let currentCharCode = start + i;
            
            if (keyCharCode == currentCharCode)
            {
                for (let j = startTemp; j <= endTemp; j++) {
                    let character = 0;
                    if (j > end)
                    {
                        character = end - subtractVal + inc;
                        inc++;
                    }
                    else character = j;

                    let cipherCharCode = cipher.charAt(charIndex).charCodeAt(0);
                    if (character == cipherCharCode)
                    {
                        plainTextResult += String.fromCharCode(start + runningIndex);
                        break;
                    }
                    runningIndex++;
                }
            }

            startTemp++;
            endTemp++;
        }
    }
    document.getElementById('decryption_result').innerText = 'Plain Text :'+plainTextResult;
}

function clearDecryptionInput()
{
    document.getElementById('cipherKey').value = "";
    document.getElementById('privateKey2').value = "";
    document.getElementById('decryption_result').innerText = "";
    decCntCompare();
}

function encCntCompare()
{
    inputCountCompare("matchingIndicator1", "enc_button", "plainText", "privateKey1");
}

function decCntCompare()
{
    inputCountCompare("matchingIndicator2", "dec_button", "cipherKey", "privateKey2");
}

function inputCountCompare(matchingIndicatorId, buttonId, text1Id, text2Id)
{
    let matchingIndicator = document.getElementById(matchingIndicatorId);
    let button = document.getElementById(buttonId);
    let text1 = document.getElementById(text1Id).value + "";
    let text2 = document.getElementById(text2Id).value + "";

    let text1Len = text1.length;
    let text2Len = text2.length;
    
    console.log(matchingIndicator.style.color);
    if (text1Len != text2Len) 
    {
        matchingIndicator.innerHTML = "Char Length Not Match";
        matchingIndicator.style.backgroundColor = "lightpink";
        button.style.backgroundColor = "#e3ecd1";
        button.style.pointerEvents = "none";
        matchingIndicator.style.display = "block";
    }
    else if ((text1Len + text2Len) < 1)
    {
        matchingIndicator.style.display = "none";
    }
    else 
    {
        matchingIndicator.innerHTML = "Char Length Match";
        matchingIndicator.style.backgroundColor = "#a0ff7d";
        button.style.backgroundColor = "rgb(211, 255, 124)";
        button.style.pointerEvents = "fill";
        matchingIndicator.style.display = "block";
    }
}

function onScroll()
{
    let scrollView = document.getElementById("table-scrollview");

    let top = scrollView.scrollTop;

    let key = document.getElementById("key");
    key.style.top = -top +"px";
}

