const path = '/home/wandry/Documents';
const fs = require('fs');
 


// function Size(){
// 	fs.stat(file, function(f) {
// 		return function(err, stats) {
// 			console.log("Path:", f);
// 			console.log("Size:", stats["size"]);
// 		}
// 	}(file));
// }

function readDir(){
	fs.readdir(path, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var file = items[i];
        console.log("List: " + file);
    }
	});
}

readDir();
