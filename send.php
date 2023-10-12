<?php

    require('PHPMailer/PHPMailer/src/PHPMailer.php');
    require('PHPMailer/PHPMailer/src/Exception.php');
    require('PHPMailer/PHPMailer/src/SMTP.php');
    
    if(isset($_GET['submit'])){


        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail -> isSMTP();
        $mail -> SMTPDebug =1;
        $mail -> SMTPAuth= true;
        $mail -> SMTPSecure ="ssl";
        
        $mail -> Host ="smtp.gmail.com";
        $mail -> Port = 465;
        $mail -> isHTML(true);
        
        $mail -> Username = "kyawmoehtunn2901@gmail.com";
        $mail -> Password ="ncfkbgjnkppjfhop";
        
        $mail -> setFrom("kyawmoehtunn2901@gmail.com");
        $mail -> addAddress("kyawmoehtunn2901@gmail.com");

        $mail -> Subject ="Getting into a pit of hell.";
        $mail -> Body ="This is a shit life";
        
        if(!$mail -> send()){
            echo "Mail Error=> ". $mail-> ErrorInfo ;     
        } else {
            echo "<script type='text/javascript'>  alert('message has been sent');</script>";
            header('location: Home.html');
            
            exit();
        }
    }
?>