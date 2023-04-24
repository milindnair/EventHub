<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
  // Redirect to login page
  echo "You are not logged in";
  header('Location: ../login_page/login.html');
  exit();
}



?>

