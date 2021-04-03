class Quiz {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState===0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref("contestantCount").once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
         question = new Question();
         question.display();
    } 
    }
    play(){
        textSize(15);
        text("What can run but never walk, has a mouth but never talks, has a head but never weeps, and has a bed but never sleeps?", 120,20);
        Contestant.getContestantInfo();
        
    }
}