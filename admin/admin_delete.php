<?php
// Retrieve the selected date from the query parameter
// $date = $_GET["date"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eventhub";
$event_name = $_GET["name"];

session_start();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare a SQL query to fetch the events for the selected date with event_confirmation = 0
$stmt = $conn->prepare("
  DELETE FROM event_data
  WHERE  event_name = ?
");

// Bind the $date parameter to the query
$stmt->bind_param("s", $event_name);

// Execute the query
$stmt->execute();

// Fetch the results as an associative array
$results = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

// Encode the results as JSON and send them back to the client
echo json_encode($results);
?>
