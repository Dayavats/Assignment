const fs = require("fs");
let n=0;
var read_from_file=function(){
  fs.readFile("abc.txt",function(err, data){
    if(err){
     return console.error(err);
    }
    else{
        n=data.toString().split('\n').length;
      let res=pascalTriangle(n)
let result="";

for(let i=0;i<res.length;i++){
    for(let j=0;j<res[i].length;j++){
        result+= res[i][j] +" "
    }
    result += "\n"
    
}
     fs.appendFile("abc.txt",result, function(err, result) {
     if(err) console.log('error', err);
   });
}
  });
}
 read_from_file();
 

function pascalTriangle(rowCount) {
    if (rowCount === 0) { return [] }
    if (rowCount === 1) { return [[1]] }
    const rows = [[1], [1, 1]];
    var prevRow = rows[1];
    for (let n = 1; n < rowCount - 1; n += 1) {
        const row = [1];
        let val = prevRow[0];
        for (let k = 0; k < prevRow.length - 1; k += 1) {
            row.push(val + (val = prevRow[k + 1]));
        }
        row.push(1);
        rows.push(row);
        prevRow = row;
    }
    return rows;
}

