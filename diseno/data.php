<?php
	$servername = "diseno1.chh9p8qxz6eu.us-east-2.rds.amazonaws.com";
    $username = "diseno";
    $password = "288882123";
    $dbname = "diseno";
    // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
       	// Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        } 
        $sql = "SELECT ID, Latitud, Longitud, Fecha, reg_date FROM datosdiseno ORDER BY ID DESC LIMIT 1";
        $resultado1 = $conn->query($sql);
        $fila = mysqli_fetch_row($resultado1);
        
        $result1 = $fila[0]."\n".$fila[1]."\n".$fila[2]."\n".$fila[3]."\n".$fila[4]."\n";  
        echo $result1;
        
        $conn->close();      
?>