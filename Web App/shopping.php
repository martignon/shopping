<?php
    $data = file_get_contents("php://input");
    $data = json_decode($data, TRUE);
    
    if (isset($data["load"])) {
        $load = $data["load"];
    }

    $file = "/var/lib/shopping-app/shopping.txt";

    if ($load == "up" && isset($data["shopping"])) {
        $file = fopen($file, "w");
        fwrite($file, $data["shopping"]);
        fclose($file);
    }
    else if ($load=="down" ) {
        $handler = fopen("/var/lib/shopping-app/shopping.txt", "r");
        $content = fgets($handler, filesize($file) + 1);
        fclose($handler);
        print($content);
    }
?>
