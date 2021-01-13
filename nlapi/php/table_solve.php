<?php
header('Access-Control-Allow-Origin:*');
include_once 'table.class.php';
//print_r("<pre>");

if((!isset($_GET['st']) || $_GET['st'] == '')||(!isset($_GET['ed']) || $_GET['ed'] == '')){
    $ans['code'] = 1;
    $ans['msg'] = '缺少参数';
    $ans['data'] = '';
    $ans = json_encode($ans,320);
    print_r($ans);
    return $ans;

}
$st = $_GET['st'];
$ed = $_GET['ed'];
//$st = 20;//$GET
//$ed = 29;
$table = new table();
$table_data = $table->getTables();
$table_arr = json_decode($table_data,true);
$k=0;
for($i=$st;$i<=$ed;$i++){
    $data[$k] = $table_arr[$i];
    $k++;
}
$ans['code'] = 0;
$ans['msg'] = '正确';
$ans['data'] = $data;
$ans = json_encode($ans,320);
print_r($ans);
return $ans;
//print_r($data);
//print_r($table_data);