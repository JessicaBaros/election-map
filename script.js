var newPolitician = function(name,partyColor)
{
         var politician={};
                 politician.partyColor = partyColor;
                 politician.name = name;
                 politician.electionResults= null;
                 politician.totalVotes= 0;
                 //FUNCTION TO TOTAL ELECTION RESULTS ARRAY
                 politician.countVotes = function()
                 {
                      this.totalVotes = 0;
                      for (var i = 0; i < this.electionResults.length; i++)
                      {
                              this.totalVotes = this.totalVotes + this.electionResults[i];
                      }
                     //console.log(this.name +" has "+this.totalVotes+" votes.");
                     //console.log(this.name+" likes this color: "+this.partyColor);
                  };

         return politician;
};

//ADD NEW POLITICIANS TO THE FACTORY FUNCTION
var candice = newPolitician ("Candice B. Furreal",[132, 17, 11]);

var midas = newPolitician ("Midas Well",[245, 141, 136]);

//ADD ELECTION ARRAY BY STATE
candice.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];

midas.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

// CALLING THE FUNCTIONS
candice.countVotes();
midas.countVotes();



var winner = function ()
{
          if (candice.totalVotes > midas.totalVotes)
          {
          winner = candice.name;
          } else if (candice.totalVotes < midas.totalVotes)
          {
          winner = midas.name;
          } else {
          winner = "No one! Everybody gets to revote";
          }
};
winner();
//console.log ("Which means the winner is... "+winner+"!");

//STATE RESULTS

setStateResults = function (state)
{
      //STATE TABLE
        var stateInfoTable = document.getElementById('stateResults');
        var header = stateInfoTable.children[0];
        var body = stateInfoTable.children[1];
        var stateName = header.children[0].children[0];
        var abbrev = header.children[0].children[1];
        var candidate1Name = body.children[0].children[0];
        var candidate2Name = body.children[1].children[0];
        var candidate1Results = body.children[0].children[1];
        var candidate2Results = body.children[1].children[1];
        var winnersName = body.children[2].children[1];

        stateName.innerText = theStates[state].nameFull;
        abbrev.innerText = theStates[state].nameAbbrev;

        candidate1Name.innerText = candice.name;
        candidate2Name.innerText = midas.name;

        candidate1Results.innerText = candice.electionResults[state];
        candidate2Results.innerText = midas.electionResults[state];

      //STATE WINNER
        theStates[state].winner = null;

          if (candice.electionResults[state] > midas.electionResults[state])
          {
            theStates[state].winner = candice;
          } else if (candice.electionResults[state] < midas.electionResults[state])
          {
            theStates[state].winner = midas;
          }

        var stateWinner = theStates[state].winner;

         if (stateWinner !== null)
         {
           theStates[state].rgbColor = stateWinner.partyColor;
         } else {
           theStates[state].rgbColor = [11,32,57];
         }

         if (theStates[state].winner === null){
             winnersName.innerText = "DRAW";
         } else {
             winnersName.innerText = theStates[state].winner.name;
         }
};



//COUNTRY RESULTS TABLE

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = candice.name;
row.children[1].innerText = candice.totalVotes;
row.children[2].innerText = midas.name;
row.children[3].innerText = midas.totalVotes;
row.children[5].innerText = winner;

console.log("all is well");
