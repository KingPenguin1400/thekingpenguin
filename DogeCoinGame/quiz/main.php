<?php
    if(isset($_COOKIE["dogeCoins"])){
        setcookie("dogeCoins", 0, time() + (86400 * 7), "/");
    }
    $correct = 0;
    if($_GET["breedInput1"] === "Corgi"){
        echo "Q. 1 = CORRECT<br>";
        $correct = $correct + 1;
        $_COOKIE["dogeCoins"] = $_COOKIE["dogeCoins"] + 1;
    }else{
        echo "Q. 1 = WRONG<br>";
    }
    if($_GET["breedInput2"] === "Golden Retriever"){
        echo "Q. 2 = CORRECT<br>";
        $correct = $correct + 1;
        $_COOKIE["dogeCoins"] = $_COOKIE["dogeCoins"] + 1;
    }else{
        echo "Q. 2 = WRONG<br>";
    }
    if($_GET["breedInput3"] === "Dalmatian"){
        echo "Q. 3 = CORRECT<br>";
        $correct = $correct + 1;
        $_COOKIE["dogeCoins"] = $_COOKIE["dogeCoins"] + 1;
    }else{
        echo "Q. 3 = WRONG<br>";
    }
    if($_GET["breedInput4"] === "Shih Tzu"){
        echo "Q. 4 = CORRECT<br>";
        $correct = $correct + 1;
        $_COOKIE["dogeCoins"] = $_COOKIE["dogeCoins"] + 1;
    }else{
        echo "Q. 4 = WRONG<br>";
    }
    if($_GET["breedInput5"] === "American Bulldog"){
        echo "Q. 5 = CORRECT<br>";
        $correct = $correct + 1;
        $_COOKIE["dogeCoins"] = $_COOKIE["dogeCoins"] + 1;
    }else{
        echo "Q. 5 = WRONG<br>";
    }
    echo "<br>so, {$correct} correct";

    if(isset($_COOKIE["dogeCoins"])){
        echo "<br>so now you have {$_COOKIE["dogeCoins"]} Doge Coin!";
    }else{
        echo "<br>error";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="submit.css">
    <title>Sumbited</title>
</head>
<body>
    
</body>
</html>