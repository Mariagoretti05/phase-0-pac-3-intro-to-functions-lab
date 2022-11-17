function shout(string) {
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log("hello".toUpperCase());
}

function logWhisper(string) {
    console.log("HELLO".toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    const notAudible = "I can't hear you!";
    const loudAndClear= "YES INDEED!";
    const askOut = "I would love to!";

    if (string.toLowerCase(string) === string) {
      return notAudible;
    }

    else if (string.toUpperCase(string) === string) {
      return loudAndClear;

    }

    else if ("Let's have dinner together!" === string) {
        return askOut;
    }
}