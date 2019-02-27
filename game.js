var NumOfTry = 8;
var wordBank =['orange','blue','green', 'yellow','violet','red','purple'];
var choosenWord = "";
var i=0;
var rightCounter = 0;
var NOT = NumOfTry;
// Number of tries
var WL = choosenWord.length();
// word length 
var guess;
var input;
var output;

function start(){
    choosenWord = wordBank [Math.floor(Math.random() * wordBank.length)];
    input = Array ( WL );
    output = Array( WL );
    for (var j = 0; j < WL; j++) {
        input[j] = choosenWord.charAt(j);
    }
    for (var j = 0; j < WL; j++) {
        output[j] = '*';
    }
    document.getElementById('theWord').textContent = output.toString;
    document.getElementById('numOfTry').textContent = NumOfTry;
    document.getElementById('yourGuess').textContent;

}

function compare() {
//genarate display



		while (i < NOT) {
				guess = in.next().charAt(0);
				for (int j = 0; j < WL; j++) {
					if (input[j] == guess) {
						output[j] = input[j];
						input[j] = '*';
						i = 1;
						rightCounter++;
					}
				}
				
				if (i == 1) {
					System.out.println();
					for (int j = 0; j < WL; j++) {
						System.out.print(output[j]);
					}
					System.out.println("");
					
					if (rightCounter == choosenWord.length()) {
						System.out.println("");
						System.out.println("Ok, you got it. It seems like u are not a dummy.");
						restart = 'n';
						break;
					}
					i = 0;
				} else {
					NOT--;
					if (NOT == 0) {
						System.out.println("");
						System.out.println("Booooooo! U suck. U just lost the game.");
						System.out.println();
						System.out.println("Want to restart? Y/N");
						restart = in.next().charAt(0);
						if (restart == 'y') {
							System.out.println("Let's do it!");
							continue;
						} else {
							System.out.println("Goodbye!");
							break;
						}
					} else {
						System.out.println("");
						System.out.println("You have " + NOT + " chances left.");
						System.out.println("");
						for (int j = 0; j < WLI; j++) {
							System.out.print(output[j]);
						}
						System.out.println("");
					}
				}
            }
			NOT = NumOfTry;
			rightCounter = 0;
		}



start();
document.onkeyup = function (event) {
compare();
    
}
    