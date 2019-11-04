alert("'Samael you don't have to do this!' echo's through the Silver City. 'Oh dear dad, see there's where you're wrong' Lucifer flies toward the blinding light to launch his attack but a pillar of what can only be described as electric sunrays starts pushing him straight down. Lucifer loses consciousness and wakes up in a dark place, all he see's is a shadow-like figure walking away from him.")

function start() {
    var storePathChoice1 = prompt("Lucifer's rage is immense and he has to take action, he can either start running or attack the shadow-like figure infront of him. So what do you want to do?\nAttack\nRun\nType in your answer using the exact word you would like to choose")
    if (storePathChoice1 === "Attack") {
        alert("You attack with the devils fury but launches straight through your opponent")
        alert("Confused by the recent line of events Lucifer\nstumbles, looks behind him, but there is no longer a foe to be seen.\nLucifer most continue his path to find the flaming sword an avenge his father\n")
        alert("Lucifer now realises his surroundings, a shadow-like foggy and dark place with chained doors lit up by a cold and dimm light. He is in what looks like a stone corridor but the fog hides the roof, if there's one. He suddenly realises: He has fallen... This is hell.")
        masterBranch()
    } else if (storePathChoice1 === "Run") {
        alert("You run")
        alert("Confused by the recent line of events Lucifer runs and after a few strides looks behind him, but there is no longer a foe to be seen. Lucifer stops for a second to think but then realises he most continue his path to find the flaming sword an avenge his father")
        alert("Lucifer now realises his surroundings, a shadow-like foggy and dark place with chained doors lit up by a cold and dimm light. He is in what looks like a stone corridor but the fog hides the roof, if there's one. He suddenly realises: He has fallen... This is hell.")
        masterBranch()
    } else {
        alert("That was not one of the options: Please write either: 'Attack' or 'Run'. Make sure to use capital letter and no citation-marks")
        start()
    }
}


function masterBranch() {
    var storePathChoice2 = prompt("He now faces two options: Open one of the doors or keep running down the corridor.\nSo what is your choice?\nOpen\nRun")
    if (storePathChoice2 === "Open") {
        alert("You open the door...")
        alert("The door opens and Lucifer suddenly looks out over an open savannah, there is some sort of quarrel between two well built men. One of the men screams: 'How could you do this again Abel? She is mine!' Then raises a stone above his head. The other man answers with a smug face: 'You couldn't please her anyway Kain'. Kain strikes and hits Abel over the head with the stone and Abel falls to the ground")
        branch1()
    } else if (storePathChoice2 === "Run") {
        alert("You run")
        alert("Lucifer run's down the corridor and suddenly silence turns into gut-wrenching screams...")
        alert("A vicous looking creature runs straight at Lucifer and just as it looks like an attack is coming she stops. With a demonic and cold voice the creature says: 'Hello Lucifer, Mazikeen at your service, forged in hell to torture the sinful'")
        branch2()
    } else {
        alert("That was not one of the options: Please write either: 'Open' or 'Run'. Make sure to use capital letter and no citation-marks")
        masterBranch()
    }
}

function branch1() {
    var storebranch1choice1 = prompt("Lucifer thinks to himself: This most be dads horrible creations.\nLucifer can either talk to the man or attack him, so what do you choose?\n'Attack'\n'Talk'")
    if (storebranch1choice1 === "Attack") {
        alert("Lucifer spreads his mighty wings, launches into the air and strikes down on Kain. Lucifers force is enough to break most of Kain's bones and his now deranged body falls flat to the ground")
        alert("A moment later the scene completely resets. Lucifer now stands close to the two men talking but it is like they are so focused on their argument that they do not even see the giant bewinged red devil next to them")
        alert("The exact same scene happends again but just before Kain is about to strike Abel... Abel he notices Lucifer. The scene suddenly stops.")
        alert("Abel's eyes looks at lucifer in utter fear. He asks Lucifer in dispair: 'Where am I? Why does this keep happening? And what are you?'")
        branch1Choice2()
    } else if (storebranch1choice1 === "Talk") {
        alert("Lucifer speaks to the man with an almost cheerful voice: 'It seems father has damned us both, what do you say we pay him a little visit?")
        alert("Still shook Abel slowly comes to his senses and a smile begins to form on his lips. 'I'm in.'")

    } else {
        alert("That was not one of the options: Please write either: 'Attack' or 'Talk'. Make sure to use capital letter and no citation-marks")
        branch1()
    }
}

function branch1Choice2() {
    var storeBranch1Choice2 = prompt("Either tell Abel he is damned to this hell forever for the sins he has commited and leave or make a deal with Abel in hopes that he might help you find the flaming sword\nSo what do you choose?\n'Leave'\n'Deal'")
    if (storeBranch1Choice2 === "Leave") {
        alert("Lucifer forms a big evil grin and says: 'You petty excuse for a soul, enjoy an eternity of damnation' Lucifer leaves entertained and more determined to find the flaming sword than ever.")
    } else if (storeBranch1Choice2 === "Deal") {
        alert("Lucifer speaks to the man with an almost cheerful voice: 'It seems father has damned us both, what do you say we pay him a little visit?")
        alert("Still shook Abel slowly comes to his senses and a smile begins to form on his lips. 'I'm in.'")
    } else {
        alert("That was not one of the options: Please write either: 'Leave' or 'Deal'. Make sure to use capital letter and no citation-marks")
        branch1Choice2()
    }
}

function branch2() {
    var storeBranch2Choice1 = prompt("You can either ask the demon to explain what is going on or command her to help you find the sword? What do you choose?\n'Ask'\n'Command'")
    if (storeBranch2Choice1 === "Ask") {
        alert("'You said you are here to torture the sinful, that sounds like fun' Lucifer says amused. 'Tell me when you say the sinful do you mean dad or those pesky little humans he created?'")
        alert("Mazikeen's face lits up 'Well I guess that is up to you'")
    } else if (storeBranch2Choice1 === "Command") {
        alert("Lucifer says with a firm voice and a smile on his face: 'Oh my dear Mazikeen... Do I have job for you.'")
        alert("'Dad has hidden the flaming sword somewhere, you are coming with me to retrieve it'")
        alert("Mazikeen: 'Wonderful'")
    } else {
        alert("That was not one of the options: Please write either: 'Ask' or 'Command'. Make sure to use capital letter and no citation-marks")
        branch2()
    }
}