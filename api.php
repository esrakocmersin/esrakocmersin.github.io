<?php
/**
 * Bilgi Evreni 4D Ultimate - cPanel / Apache / PHP API Köprüsü
 * Bu dosya sayesinde site, Node.js kurulu olmayan klasik cPanel hostinglerde de %100 çalışır.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Force');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dbFile = __DIR__ . '/veritabani.json';

// İstek URI ayrıştırma
$uri = $_SERVER['REQUEST_URI'] ?? '';
$path = parse_url($uri, PHP_URL_PATH);
$route = '';

if (preg_match('#/api/([a-zA-Z0-9_\-]+)#', $path, $m)) {
    $route = $m[1];
} elseif (isset($_GET['route'])) {
    $route = $_GET['route'];
}

function read_db($file) {
    if (!file_exists($file)) return null;
    $raw = file_get_contents($file);
    return json_decode($raw, true);
}

function write_db($file, $data) {
    $tmp = $file . '.tmp';
    file_put_contents($tmp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
    rename($tmp, $file);
}

// 1. PING
if ($route === 'ping' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = read_db($dbFile);
    echo json_encode([
        'ok' => true,
        'hasDb' => !empty($db),
        'updatedAt' => $db['updatedAt'] ?? 0,
        'time' => (int)(microtime(true) * 1000)
    ]);
    exit;
}

// 2. GET DB
if ($route === 'db' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = read_db($dbFile);
    echo json_encode([
        'ok' => true,
        'db' => $db
    ]);
    exit;
}

// 3. POST DB
if ($route === 'db' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $incoming = json_decode($input, true);

    if (!$incoming || !isset($incoming['users']) || !is_array($incoming['users'])) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Geçersiz veritabanı biçimi']);
        exit;
    }

    $current = read_db($dbFile);
    $force = ($_SERVER['HTTP_X_FORCE'] ?? '') === '1';

    if ($current && !$force && ($current['updatedAt'] ?? 0) > ($incoming['updatedAt'] ?? 0)) {
        http_response_code(409);
        echo json_encode([
            'ok' => false,
            'error' => 'Sunucudaki veri daha yeni',
            'db' => $current
        ]);
        exit;
    }

    write_db($dbFile, $incoming);
    echo json_encode([
        'ok' => true,
        'updatedAt' => $incoming['updatedAt'] ?? (int)(microtime(true) * 1000)
    ]);
    exit;
}

// 4. BACKUP
if ($route === 'backup' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = read_db($dbFile);
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: attachment; filename="veritabani-yedek.json"');
    echo json_encode($db ?: [], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

// 5. TTS STATUS (PHP sunucuda statik sesler hazır olduğu için hazır döner)
if ($route === 'tts' && ($_SERVER['REQUEST_URI'] ?? '') && strpos($_SERVER['REQUEST_URI'], '/status') !== false) {
    echo json_encode([
        'ok' => true,
        'ready' => true,
        'voice' => 'tr-TR-EmelNeural',
        'staticReady' => true
    ]);
    exit;
}

http_response_code(404);
echo json_encode(['ok' => false, 'error' => 'Bulunamadı']);

