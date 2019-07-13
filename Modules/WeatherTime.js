const WeatherVariations = ['EXTRASUNNY','CLOUDS','FOGGY','RAIN','THUNDER','CLEARING','CLEAR']

mp.events.addCommand('setweather',(player,fulltext,weatherType) => {
    if (weatherType == undefined) {
        for (var i = 0; i < WeatherVariations.Length; i++) {
            player.outputChatBox(WeatherVariations[i]);
        };
        return;
    };
    mp.world.weather = weatherType;


});

mp.events.addCommand('settime',(player,fulltext,a,b,c) => {
    var hours = Number(a);
    var minutes = Number(b);
    var seconds = Number(c);
    if (hours > 23 || (minutes>59) || seconds>59) {
        player.outputChatBox('/settime [hours] [minutes] [seconds]');
        return;
    };
    mp.world.time.hour   = hours;
    mp.world.time.minute = minutes;
    mp.world.time.second = seconds;
});

