<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eventhub";

session_start();

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST["user_register_event"])){
    $name = $_POST["name"];
    $year = $_POST["year"];
    $roll_no = $_POST["roll_no"];
    $event_name = $_POST["event_name"];
    echo $year;

    $stmt = $conn->prepare("INSERT INTO ${event_name} (name, year, roll_no) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $year, $roll_no);

    if ($stmt->execute()) {
        echo "New record created successfully";    
        header("Location: ../user/user.html");
        exit();
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
    
      // Close statement
      $stmt->close();


}

?>