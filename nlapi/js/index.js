$(document).ready(function(){
    $("#confirm").click(function(){
        $(".sql_table").empty();
        st = $("#st").val();
        ed = $("#ed").val();
        console.log(st);
        console.log(ed);
        url = "php/table_solve.php?st="+st+"&ed="+ed;
        $.get(url, function (data, status) {
            //console.log(status);
            if (status=='success') {
                //console.log(data);
                dataObj = $.parseJSON(data);
                //console.log(dataObj);
                $.each(dataObj["data"], function (idx, obj) {
                    $table = $('<table border=\"1\" class=\"table_data\"></table>');
                    $caption = $('<caption></caption>');
                    $caption.text(obj['name']);
                    $table.append($caption);
                    $head = $('<thead></thead>');
                    $tr = $('<tr></tr>');
                    $.each(obj['header'], function (idx, obj) {
                        $td = $('<td></td>');
                        $td.text(obj);
                        $tr.append($td);
                    });
                    $head.append($tr);
                    $table.append($head);
                    $body = $('<tbody></tbody>');
                    $.each(obj['rows'], function (idx, obj) {
                        $tr = $('<tr></tr>');
                        $.each(obj, function (idx, obj) {
                            $td = $('<td></td>');
                            $td.text(obj);
                            $tr.append($td);
                        });
                        $body.append($tr);
                    });
                    $table.append($body);
                    $div = $('<div class="shows"></div>');
                    $div.append($table);
                    $(".sql_table").append($div);
                    //console.log(obj["header"]);
                });
            }
        });
    });

    $("#query").click(function(){
        $.post("http://127.0.0.1:18888/nl2sql", {"question": $("#question").val(), "table_id":$("#table_id").val()}, function(data, status){
            console.log(status);
            if (status=='success') {
                console.log(data);
                dataObj = $.parseJSON(data);
                if (dataObj['msg']=='ok') {
                    $("#sql").text(dataObj["query"]);
                    $("#sql_data").empty();
                    $.each(dataObj["result"], function (idx, obj) {
                        result = obj.join(",");
                        $("#sql_data").append($('<p>' + result + '</p>'));
                    });
                } else {
                    alert(dataObj['msg']);
                }
            } else {
                alert("网络错误!");
            }
        });
    });


    $("#confirm").trigger('click');
})