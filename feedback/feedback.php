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

if(isset($_POST['event_feedback'])){
    $registration = $_POST['registration'];
    $experience = $_POST['experience'];
    $volunteers = $_POST['volunteers'];
    $event_type = $_POST['event-type'];
    $mood = $_POST['mood'];
    $more_event = $_POST['more-event'];
    $rate = $_POST['rate'];
    $comments = $_POST['comments'];

    $stmt = $conn->prepare("INSERT INTO feedback_event (registration, experience, volunteers, conduction, mood, future, rate, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $registration, $experience, $volunteers, $event_type, $mood, $more_event, $rate, $comments);
    
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