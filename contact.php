<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST['formSubmit'])){

        $fullName = $_REQUEST['fullName'];

        $email = $_REQUEST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
            echo $emailErr;
        }

        $service = $_REQUEST['services'];
        if(isset($_REQUEST['services'])){
            foreach($service as $services){
                echo $services."<br>";
            }
        }
        else{
            echo "שירות לא נבחר";
        }

        $msgField = $_REQUEST['msgField'];

    }
}

?>

<!DOCTYPE html>
<html ng-app="romApp">
<head lang="en"></head>
<body>
    <table style='border:1px solid;width:90%'>
        <th>Full Name</th><th>E-mail</th> <th>Services</th> <th>Message</th>
        <tr>
            <td style='border:1px solid;'></td>
        </tr>
    </table>
</body>
</html>