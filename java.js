function start() {
    alert("Test")
    var storePathChoice1 = prompt("So what do you want to do? \n Attack \n Run \n Hide \n Type in your answer using the exact word you would like to choose")
    if (storePathChoice1 === "Attack") {
        alert("You attack with the devils fury but launches straight through your opponent")
        alert("Confused by the recent line of events Lucifer \n stumbles and looks behind him, but there is no longer a foe to be seen.\nLucifer most continue his path to find the flaming sword an avenge his father \n")
    } else if (storePathChoice1 === "Run") {
        alert("You run")
        alert("Confused by the recent line of events Lucifer \n runs and after a few strides looks behind him, but there is no longer a foe to be seen.\nLucifer stops for a second to think but then realises he most continue his path to find the flaming sword an avenge his father \n")
        alert("Lucifer now realises his surroundings,\n a shadow-like foggy and dark place with chained doors lit up by a cold and dimm light.\n He is in what looks like a stone corridor but the fog hides the roof, if there's one.\n He suddenly realises: He has fallen...\n This is hell.")
        prompt("He now faces three options: Open one of the doors, start climbing the walls or keep running down the corridor.\n So what is your choice?\n Open\n Climb \n Run")
    } else if (storePathChoice1 === "Hide") {
        alert("You hide")
        alert("Confused by the recent line of events Lucifer \n runs and hides, after a few moments he looks behind him, but there is no longer a foe to be seen.\nLucifer stops for a second to think but then realises he most continue his path to find the flaming sword an avenge his father \n")
    } else {
        alert("That was not one of the options: Please write either: 'Attack' 'Run' or 'Hide'. Make sure to use capital letter and no citation-marks")
        start()
    }

    alert("Test2")
    var storePathChoice2 = prompt("So what do you want to do? \n Attack \n Run \n Hide \n Type in your answer using the exact word you would like to choose")
    if (storePathChoice2 === "Attack") {
        alert("You attack with the devils fury but launches straight through your opponent")
        alert("Confused by the recent line of events Lucifer \n stumbles and looks behind him, but there is no longer a foe to be seen.\nLucifer most continue his path to find the flaming sword an avenge his father \n")
    } else if (storePathChoice2 === "Run") {
        alert("You run")
        alert("Confused by the recent line of events Lucifer \n runs and after a few strides looks behind him, but there is no longer a foe to be seen.\nLucifer stops for a second to think but then realises he most continue his path to find the flaming sword an avenge his father \n")
    } else if (storePathChoice2 === "Hide") {
        alert("You hide")
        alert("Confused by the recent line of events Lucifer \n runs and hides, after a few moments he looks behind him, but there is no longer a foe to be seen.\nLucifer stops for a second to think but then realises he most continue his path to find the flaming sword an avenge his father \n")
    } else {
        alert("That was not one of the options: Please write either: 'Attack' 'Run' or 'Hide'. Make sure to use capital letter and no citation-marks")
        start()
    }
}