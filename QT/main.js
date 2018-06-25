loadFile = function (event) {

    alasql("CREATE TABLE data");

    // alasql('SELECT id, color FROM FILE(?,{headers:true})',[event],function(data){
    // 	print(data)
    // });

    alasql.promise('SELECT * FROM FILE(?,{headers:true})', [event]).then(res => {
        alasql('INSERT INTO data SELECT * FROM ?', [res]);
        console.log("Finished uploading this file")
        var res = alasql("SELECT * FROM data")
        console.log(res);

    })




}

loadFile2 = function (event) {

    alasql("CREATE TABLE data2");
    console.log(event);

    alasql.promise('SELECT * FROM FILE(?,{headers:true})', [event]).then(res => {
        alasql('INSERT INTO data2 SELECT * FROM ?', [res]);
        console.log("Finished uploading this file")
        var res = alasql("SELECT * FROM data2")
        console.log(res);
    })




}


function query1() {
    let queryTest = "SELECT * FROM data INNER JOIN data2 ON data.id=data2.id;"

    alasql(queryTest, [event], function (data) {
        console.log(data)
    });
}

function print(x) {
    document.getElementById('output').textContent += JSON.stringify(x, null, '\t') + "\n";
}