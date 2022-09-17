<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="stylesheet.css">

    <script src="cryptography.js"></script>

</head>

<body>

    <div class="header">
        <h1> CIPHER CRYPTOGRAPHY ILLUSTRATOR </h1>
        <p> Created by Lioncio Morcilla </p>
    </div>

    <div class="container">
        <table>
            <?php
                $start = 65;
                $end = 90;

                $subtractVal = $end - $start;
                $totalChar = $subtractVal + 1;

                $tempStart = $start;
                $tempEnd = $end;

                for ($i=0; $i < $totalChar; $i++) { 

                    if ($i == 0)
                    {
                        echo "<tr class='cipher'>";
                            for ($k=$start-2; $k <= $end; $k++) { 

                                if ($k == $start-2 || $k == $start-1)
                                {
                                    echo  "<td>&nbsp&nbsp</td>";
                                    continue;
                                }

                                echo 
                                    "<td>
                                        ".chr($k)."
                                    </td>";
                            }
                        echo "</tr>";
                    }

                    $inc = 0;

                    echo "<tr>";
                        for ($j = $tempStart; $j <= $tempEnd; $j++) {

                            $character = 0;
                            
                            if ($j > $end)
                            {
                                $character = $end - $subtractVal + $inc;
                                $inc++;
                            }
                            else $character = $j;


                            if ($j == $tempStart)
                            {
                                echo 
                                "<td class='key'>
                                    ".chr($i + $start)."
                                </td>

                                <td></td>
                                ";
                            }

                            
                            echo 
                                "<td>
                                    ".chr($character)."
                                </td>";
                        }
                    echo "</tr>";

                    $tempStart++;
                    $tempEnd++;
                }
            ?>
        </table>
        
        <div class="input-box">

                <h2> Encrypt </h2>  
                <div>
                    <p> Plain Text </p> <input onkeyup="encCntCompare()" type="text" id="plainText">
                    <p> Private Key </p> <input onkeyup="encCntCompare()" type="text" id="privateKey1">
                    <small id="matchingIndicator1">  </small>
                    <nav>
                        <Button id="enc_button" onclick="encrypt()"> Encrypt </Button>
                        <Button onclick="clearEncryptionInput()"> Clear </Button>
                    </nav>

                    <p id="encryption_result">  </p>
                    
                </div>

                <h2> Decrypt </h2>
                <div>
                    <p> Cipher Key </p> <input onkeyup="decCntCompare()" type="text" id="cipherKey">
                    <p> Private Key </p> <input onkeyup="decCntCompare()" type="text" id="privateKey2">
                    <small id="matchingIndicator2">  </small>
                    <nav>
                        <Button id="dec_button" onclick="decrypt()"> Decrypt </Button>
                        <Button onclick="clearDecryptionInput()"> Clear </Button>
                    </nav>

                    <p id="decryption_result">  </p>
                </div> 
                <p class="notes"> notes: Input should range from A to Z characters only</p>
            </div>

    </div>
</body>
</html>