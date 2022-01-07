// script to generate random greetings
function randomText(object) {
    // array splashes
     var say = [];
     say[0] = "Welcome.";
     say[1] = "Hello!";
     say[2] = "Does this even work?";
     say[3] = "Welcome to my rad website";
     say[4] = "Made with HTML!";
     say[5] = "Now with buggy games!";
     say[6] = "You get a cookie!";
     say[7] = "Remember your manners!";
     say[8] = "Dogs are cute";
     say[9] = "Ok, and I know your address now!";
     say[10] = "Beep boop! Are you a robot?";
     say[11] = "Did you know I have a discord server?";
     say[12] = "How many sides does a circle have?";
     say[13] = "1 + 1 = 3";
     say[14] = "You can read btw";
     say[15] = "Made you look!";
     say[16] = "Never gonna give you up, Never gonna let you down...";
     say[17] = "Redbull gives you wings...";
     say[18] = "What is your highscore on Swerve?";
     say[19] = "Since 2020!";
     say[20] = "Now with 2X more bugs!";
     say[21] = "12345 is not a good password";
     say[22] = "This took to long to make";
     say[23] = "69";
     say[24] = "Ahhhhhhhhh";
     say[25] = "Awesome!";
     say[26] = "As seen on TV!";
     say[27] = "doot doot";
     say[28] = "100% Fresh!";
     say[29] = "LOL";
     say[30] = "Cold as ice!";
     say[31] = "Why are you looking at me?";
     say[32] = "Made in the US!";
     say[33] = "Made by 3kh0!";
     say[34] = "Reload the page NOW!";
     say[35] = "Downloading your passwords... Please wait";
     say[36] = "Running 3kh0.exe";
     say[37] = "WARNING: You may lose braincells if you proceed!";
     say[38] = "Please go away. Thx";
     say[39] = "Made with GitHub!";
     say[40] = "Made with VS code!";
     say[41] = "This is a splash text!";
     say[42] = "100% Orgainic!";
     say[43] = "Now with pac-man!";
     say[44] = "Now with polybranch!";
     say[45] = "Now with JavaScript!";
     say[46] = "Do you bite your ice cream?";
     say[47] = "Reddit: u/3kh0_reddit";
     say[48] = "Discord: https://discord.gg/6d2MNXWVmV";
     say[49] = "This was not ment to be seen. :o";
     say[50] = "Does anyone know how to stand up?";
     say[51] = "69420";
     say[52] = "Me too bro.";
     say[53] = "#Relatable";
     say[54] = "2 + 2 is 4 - 1 is 3 Quick mafs";
     say[55] = "Feels bad man.";
     say[56] = "Now with games that are unblocked?";
     say[57] = "Now with great games!";
     say[58] = "How do you play tic-tac-toe?";
     say[59] = "Fortnite is cringe";
     say[60] = "You got games on your phone?";
     say[61] = "I am not gonna say anything.";
     say[62] = "Now with Minecraft!";
     say[63] = "";
    
    // pick a random greeting
    var howmany = say.length;
    var bRand = 0;
    bRand = Math.random();
    bRand = Math.floor(bRand * howmany);
    // prepare and docwrite the greeting
    sayWhat = say[bRand];
    // direct type in html p element
    object.innerText = sayWhat;
}
