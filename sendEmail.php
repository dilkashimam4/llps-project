<?php
echo "php working";
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Collect form data
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $message = htmlspecialchars($_POST['message']);


//     echo $name;
//     echo $email;
//     echo $message;
    // Email to send the form details
    // $to = "infodaily0110@gmail.com";
    // $subject = "New Contact Us Form Submission";
    // $body = "Name: $name\nEmail: $email\nMessage: $message";
    // $headers = "From: $email";

    // // Send email
    // if(mail($to, $subject, $body, $headers)) {
    //     // Redirect to WhatsApp with a message
    //     $whatsappMessage = urlencode("New Contact Us Submission: \nName: $name\nEmail: $email\nMessage: $message");
    //     $whatsappUrl = "https://wa.me/8307121717?text=$whatsappMessage";
    //     echo "<script>window.location.href = '$whatsappUrl';</script>";
    // } else {
    //     echo "Error in sending the email.";
    // }
// }
?>