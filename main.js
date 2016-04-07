var data = prompt("Enter something I can read to learn :)", "Lorem ipsum dolor").split(" ");
var items = [];
var msg = [];
var options = [];
var exclusions = [];

function maxOf(arr) {
	return Math.max.apply(null, arr);
}

Array.prototype.contains = function(obj) {
    for(i = this.length-1; i >= 0; i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

for(pos = 0; pos < data.length; pos++) {
	var item = data[pos];
	
	if(item[0] == item[0].toUpperCase()) {
		options.push(item);
	}
	
	if(pos < data.length-1 && !(exclusions.contains(item))) {
		var items2 = [];
		exclusions.push(item);
		for(i = pos; i < data.length; i++) {
			if(data[i] == item) {
				items2.push(data[i+1]);
			}
		}
		items.push([item, items2]);
	} else {
		items.push([item]);
	}
}

for(i = 0; i < items.length; i++) {
	var item = items[i];
	var li = [];
	
	if(typeof item[1] != 'undefined') {
		for(it = 0; it < item[1].length; it++) {
			var c = 0;
			for(pos = it; pos < item[1].length; pos++) {
				if(item[1][pos] == item[1][it]) {
					c++;
				}
			}
			li.push(c);
		}
		item[1] = item[1][li.indexOf(maxOf(li))];
	}
}

msg.push(options[Math.floor(Math.random() * options.length)]);

var pos = 0;
do {
	var item = items[data.indexOf(msg[pos])];
	
	if(typeof item != 'undefined' && typeof item[1] != 'undefined') {
		msg.push(item[1]);
	}
	
	pos++;
} while(pos < items.length);

alert(msg.join(" "));