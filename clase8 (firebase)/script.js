var db = firebase.database();
db.ref("db/users").on("value", function (datalist) {
    var lista = datalist.val();
    
    var trs;
    for (var i in lista) {
        var obj = lista[i];
        trs += '<tr><th scope="row">'+i+'</th>';
        trs += '<td>'+obj.nombre+'</td>';
        trs += '<td>'+obj.mail+'</td>';
        trs += '<td><input type="password" value="'+obj.password+'"></td></tr>';
    }
    document.getElementById("user-tbody").innerHTML += trs ;
    
    
});