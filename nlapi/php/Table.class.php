<?php

Class Table{

    var $arr;
    var $data;
    var $len;
    var $ids;
    //print_r("<pre>");

    function __construct() {
        $this->r_data();
        $this->d2json();
    }

    function r_data(){
        $table_json = fopen('final_test.tables.json','r'); //打开文件
        $i = 0;
        while(!feof($table_json)){
            $this->arr[$i] = fgets($table_json);
            $i++;
        }
        $this->len = $i;
        fclose($table_json);
    }

    function d2json(){
        for($j=0;$j<$this->len;$j++){
            $table_arr[$j] = json_decode($this->arr[$j],true);
            $this->ids[$j] = $table_arr[$j]['id'];
            //var_dump($table_arr[$j]);
        }
        //print_r($table_arr[0]);
        $this->data = json_encode($table_arr,320);
        //return $this->data;
    }

    function getTables(){
        $json_data = $this->data;
        return $json_data;
    }

    function getIds(){
        $ids = $this->ids;
        return $ids;
    }
}


