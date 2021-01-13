$(document).ready(function(){
    $("#confirm").click(function(){
        st = $("#st").val();
        ed = $("#ed").val();
        console.log(st);
        console.log(ed);
        url = "http://127.0.0.1/nlapi/table_solve.php?st="+st+"&ed="+ed;
        $.get(url, function (data, status) {
            console.log(status);
        });
    });
    
    $.post("http://127.0.0.1:18888/nl2sql", {"question": "这种BT-1574型号的发声拉是什么公司的产品震玩具", "table_id":"a88bac7a3b0611e9a29bf40f24344a08"}, function(result){
        console.log(result);
    });
})