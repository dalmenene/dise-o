<?php
$servername = "diseno.cxmeswdphwpd.us-east-1.rds.amazonaws.com";
    $username = "dherreraj";
    $password = "9805jama";
    $dbname = "diseno";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO datosdiseno (Latitud, Longitud, Fecha)
VALUES ('".$_REQUEST['lat']."', '".$_REQUEST['lon']."', '2019-02-26 10:18:4')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>