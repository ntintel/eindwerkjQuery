<?php
$conn = new PDO('mysql:host=localhost;dbname=submit_to_db2', 'root', 'root');
$query = "INSERT into opleiding(name, email, opleidingstraject) VALUES (?, ?, ?)";
$stmt = $conn->prepare($query); 
$stmt->execute([
    $_POST['naam'], $_POST['email'], $_POST['opleidingstraject']
    ]);
    if($stmt) {
        echo "Bedankt voor uw inschrijving! We hebben u reeds een bevestigingsmail gestuurd met verder info.";
    } else {
        echo "Er was een probleem. Gelieve het later opnieuw te proberen";
    }
    $conn = null;    

?>
