<?php
header('Access-Control-Allow-Origin: https://hanoi-order.niconicoyasai.jp');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if($_SERVER['REQUEST_METHOD']==='OPTIONS'){http_response_code(200);exit;}
$data=json_decode(file_get_contents('php://input'),true);
$token=isset($data['token'])?$data['token']:'';
$userId=isset($data['userId'])?$data['userId']:'';
$text=isset($data['text'])?$data['text']:'';
if(!$token||!$userId||!$text){http_response_code(400);echo json_encode(['error'=>'missing params']);exit;}
$ch=curl_init('https://api.line.me/v2/bot/message/push');
curl_setopt($ch,CURLOPT_POST,true);
curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode(['to'=>$userId,'messages'=>[['type'=>'text','text'=>$text]]]));
curl_setopt($ch,CURLOPT_HTTPHEADER,['Content-Type: application/json','Authorization: Bearer '.$token]);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,true);
$result=curl_exec($ch);
$status=curl_getinfo($ch,CURLINFO_HTTP_CODE);
curl_close($ch);
http_response_code($status);
header('Content-Type: application/json');
echo $result?:'{}';
