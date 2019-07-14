setInterval(() => {
    playerBlipUpdates();
},100);

function playerBlipUpdates (){
    var playersArray = mp.players.toArray();
    function blip(p) {
        var blip1 = mp.blips.new(0, p.position);
    };
    playersArray.forEach(blip);
};

