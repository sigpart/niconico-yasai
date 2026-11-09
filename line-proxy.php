<?php
$allowedOrigins=[
  'https://hanoi-order.niconicoyasai.jp',
  'https://sigpart.github.io',
];
$origin=isset($_SERVER['HTTP_ORIGIN'])?$_SERVER['HTTP_ORIGIN']:'';
if(in_array($origin,$allowedOrigins)){
  header('Access-Control-Allow-Origin: '.$origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if($_SERVER['REQUEST_METHOD']==='OPTIONS'){http_response_code(200);exit;}

$data=json_decode(file_get_contents('php://input'),true);
$userId=isset($data['userId'])?trim($data['userId']):'';
$text=isset($data['text'])?trim($data['text']):'';
if(!$userId||!$text){http_response_code(400);echo json_encode(['error'=>'missing params']);exit;}

// Firestoreのpub_config/lineからLINEチャネルトークンをcurlで取得
$projectId='nico-nico-yasai-hanoi-order';
$apiKey='AIzaSyCE15q3KAPiXCUrzEmsVEL92HtE95eOBUk';
$cfgUrl="https://firestore.googleapis.com/v1/projects/{$projectId}/databases/(default)/documents/pub_config/line?key={$apiKey}";
$cfgCh=curl_init($cfgUrl);
curl_setopt($cfgCh,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cfgCh,CURLOPT_SSL_VERIFYPEER,true);
curl_setopt($cfgCh,CURLOPT_TIMEOUT,5);
$cfgRaw=curl_exec($cfgCh);
curl_close($cfgCh);
$cfg=$cfgRaw?json_decode($cfgRaw,true):null;
$token=isset($cfg['fields']['token']['stringValue'])?$cfg['fields']['token']['stringValue']:'';

if(!$token){http_response_code(500);echo json_encode(['error'=>'LINE token not configured']);exit;}

$ch=curl_init('https://api.line.me/v2/bot/message/push');
curl_setopt($ch,CURLOPT_POST,true);
curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode(['to'=>$userId,'messages'=>[['type'=>'text','text'=>$text]]]));
curl_setopt($ch,CURLOPT_HTTPHEADER,['Content-Type: application/json','Authorization: Bearer '.$token]);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,true);
curl_setopt($ch,CURLOPT_TIMEOUT,10);
$result=curl_exec($ch);
$status=curl_getinfo($ch,CURLINFO_HTTP_CODE);
curl_close($ch);
http_response_code($status);
header('Content-Type: application/json');
echo $result?:'{}';
