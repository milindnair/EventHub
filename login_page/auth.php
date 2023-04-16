<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eventhub";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['save']))
{
  $fullname = $_POST['regname'];
  $email = $_POST['regemail'];
  $password = $_POST['regpass'];

  // Prepare statement
  $stmt = $conn->prepare("INSERT INTO userdata (name, email, password) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $fullname, $email, $password);

  if ($stmt->execute()) {
    echo "New record created successfully";
    header("Location: ../Home/home.html");
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Close statement
  $stmt->close();
}

if(isset($_POST['check']))
{
  $email = $_POST['logemail'];
  $password = $_POST['logpass'];

  // Prepare statement
  $stmt = $conn->prepare("SELECT * FROM userdata WHERE email = ? AND password = ?");
  $stmt->bind_param("ss", $email, $password);

  if ($stmt->execute()) {
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
      echo "Login successful";
      header("Location: ../Home/home.html");
      exit();
    } else {
      echo "Login failed";
      echo 'alert("Validation failed")';
    }
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Close statement
  $stmt->close();
}

// Close connection
$conn->close();
?>