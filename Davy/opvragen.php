<?php
$conn = new PDO('mysql:host=localhost;dbname=submit_to_db2', 'root', 'root');

foreach($conn->query('SELECT name,email,opleidingstraject FROM opleiding LIMIT 100') as $row) {
    echo $tableString = "
    <table style='text-align:left;'>
   		<tr><th>Naam: </th><td>{$row['name']}</td></tr>
   	<tr><th>Email: </th><td>{$row['email']}</td></tr>
   	 	<tr><th>Opleidingstraject: </th><td>{$row['opleidingstraject']}</td></tr>
    </table><hr />";
}
$conn = null;
/*eventueel quotes rond name: $row['name']}*/
?>

