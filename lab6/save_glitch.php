<?php

$inputData = file_get_contents('php://input');
if (!$inputData) {
	echo json_encode(['status' => 'error', 'message' => 'No input data']);
	exit;
}
$newObject = json_decode($inputData, true);
if (!$newObject) {
	echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
	exit;
}
$dataFile = 'glitch_data.json';
if (file_exists($dataFile)) {
	$existingData = json_decode(file_get_contents($dataFile), true);
	if (!is_array($existingData)) {
		$existingData = [];
	}
} else {
	$existingData = [];
}
$existingData[] = $newObject;
if (file_put_contents($dataFile, json_encode($existingData, JSON_PRETTY_PRINT))) {
	echo json_encode(['status' => 'success', 'message' => 'Object saved']);
} else {
	echo json_encode(['status' => 'error', 'message' => 'Failed to save data']);
}

?>