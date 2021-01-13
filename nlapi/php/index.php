<?php

include_once "Table.class.php";
echo "<pre>";

$table_id = "eea046a6453d11e98c31f40f24344a08";
$question = "汕头澄海力驰塑料玩具厂生产什么型号的娃娃";
$table = new Table();
$ids = $table->getIds();

if(in_array($table_id, $ids)){
    echo "true";
}
else{
    echo "false";
}

