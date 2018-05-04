var letter = require('./letter.js')

function word(word){
	this.word = word;
	this.letterArray = [];

	for (var i in word){
		console.log("Adding " + word[i]);
		var newLetter = new letter(word[i]);
		console.log(newLetter.getChar());
		this.letterArray.push(newLetter);
	}

}

word.prototype.toString = function() {
	var str = "";
	for (var i = 0; i < this.letterArray.length; i++){
		str += (this.letterArray[i].toString())
	}
	return str;
}

module.exports = word;