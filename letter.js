function letter(character, guessed){
	this.character = character;
	this.guessed = false;

	this.getChar = function(){
		if (guessed){
			return character;
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