function letter(character){
	this.character = character;
	this.guessed = false;

	this.getChar = function(){
		if (this.guessed){
			return this.character;
		} else {
			return "_";
		}
	}

	this.guessChar = function(guessCharacter){
		if (guessCharacter === this.character){
			this.guessed = true;
		}
	}
}

module.exports = letter;