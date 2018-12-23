<?php
// jSON URL which should be requested

$url = 'https://jira.adoreme.com/rest/agile/latest/board/35/issue?maxResults=300';

$username = '';  // authentication
$password = '';  // authentication
// jSON String for request

// Initializing curl
$ch = curl_init( $url );
// Configuring curl options
$options = array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_USERPWD => $username . ":" . $password,  // authentication
    CURLOPT_HTTPHEADER => array('Content-type: application/json')
);
// Setting curl options
curl_setopt_array( $ch, $options );
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
// Getting results
$result = curl_exec($ch);
 echo $result;

?>
