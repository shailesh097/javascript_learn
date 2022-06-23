var mp = new Map([['t', 2],['i', 3],[4, 'i']])


function maps(){
	// map is key value pair
	console.log(mp.get('t')) // .get() method access the values of the desired key
	mp.set('t',9) // .set() method replaces the value if a key if it is already present in the map 
	mp.set(3, 'hello')// .set() method is used to add a new key value pair in a map.
	console.log(mp.get(4))
	console.log(mp.size) // .size gives the size of the map
	mp.delete(4) // .delete() deletes the key and value of the given key 
	console.log(mp.has('t')) // .has(key) method gives boolean value if the key is present or not
	console.log(mp.has(6))

	// mp.clear() will clear all the entries and creates an empty map
}
console.log(mp.entries()) //.entries is used to look at all the different entries

function loop_thr_map(){
	// loop through a map
	for (var entry of mp){
		console.log(entry)
	}

	for (var entry of mp){
		console.log(entry[0]) // using indexes [0] will give key and index [1] give the value
	}
}

var mpp = new Map()
str = 'this is my new string'

for(var letter of str){
	if(mpp.has(letter)){
		mpp.set(letter, mpp.get(letter)+1)
	}
}

console.log(mpp.get('e'))