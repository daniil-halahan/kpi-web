<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$inputData = file_get_contents('php://input');
	if (!$inputData)
		exit;
	$newObject = json_decode($inputData, true);
	if (!$newObject)
		exit;
	$dataFile = 'glitch_data.json';
	if (file_exists($dataFile)) {
		$existingData = json_decode(file_get_contents($dataFile), true);
		if (!is_array($existingData))
			$existingData = [];
	} else {
		$existingData = [];
	}
	$existingData[] = $newObject;
	file_put_contents($dataFile, json_encode($existingData, JSON_PRETTY_PRINT));
}
?>