<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eventhub";
session_start();
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
  $role = $_POST['regrole'];

  // Prepare statement
  $stmt = $conn->prepare("INSERT INTO userdata (name, email, password , Role) VALUES (?, ?, ? , ?)");
  $stmt->bind_param("ssss", $fullname, $email, $password , $role);

  if ($stmt->execute()) {
    echo "New record created successfully";    
    header("Location: ../Home/home.html");
    exit();
  } else {
    $_SESSION['logged_in'] = false;
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Close statement
  $stmt->close();
}

if(isset($_POST['check']))
{
  $email = $_POST['logemail'];
  $password = $_POST['logpass'];
  $role = $_POST['role'];

  // Prepare statement
  $stmt = $conn->prepare("SELECT * FROM userdata WHERE email = ? AND password = ? AND Role = ?");
  $stmt->bind_param("sss", $email, $password , $role);

  if ($stmt->execute()) {
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $_SESSION['logged_in'] = true;
      
      if ($row['Role'] == 'admin') {
          header("Location: ../admin/admin.html");
      } else if ($row['Role'] == 'HOD') {
          header("Location: ../HOD/HOD.html");
      } else {
          header("Location: ../user/user.html");
      }
      
      exit();
  } else {
      $_SESSION['logged_in'] = false;
      header("Location: ../login_page/login.html");
      exit();
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