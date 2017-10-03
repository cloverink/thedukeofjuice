<?php

  $today = date("Ymd");

  include("core/config.php");
  include("core/helper.php");

?>
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>THE DUKE OF JUICE</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="styles/styles.min.css?v=<?=$today?>" />
  </head>
  
  <body data-template="<?=$template_name?>">
    <?php include "partials/header.php" ?>
    <main>
      <?php include $target_file; ?>        
    </main>
    <?php include "partials/footer.php" ?>
    <script src="scripts/vendors.min.js?v=<?=$today?>"></script>
    <script src="scripts/apps.min.js?v=<?=$today?>"></script>

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  </body>
</html>