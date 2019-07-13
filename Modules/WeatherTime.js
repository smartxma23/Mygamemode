const WeatherVariations = ['EXTRASUNNY','CLOUDS','FOGGY','RAIN','THUNDER','CLEARING','CLEAR']

let h = 20;
let m = 00;
let s = 00;

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
    if (hours > 23 || minutes>59 || seconds>59) {
        player.outputChatBox('/settime [hours] [minutes] [seconds]');
        return;
    };
    mp.world.time.hour   = hours;
    mp.world.time.minute = minutes;
    mp.world.time.second = seconds;
});

mp.events.addCommand('gettime',(player,fullText) => {
    let h = mp.world.time.hour ;
    let m = mp.world.time.minute ;
    let s = mp.world.time.second;
    player.outputChatBox(`It's currently ${h}:${m}:${s}`);
    
});

setInterval(() => {
        timeUpdates();
},1000);

function timeUpdates() {
    mp.world.time.set(h,m,s);
    if (s>59) {
        m += 1;
        s = 0
    };
    if (m>59) {
        h += 1;
        m = 0;
        s = 0;
    };
    if (h>23){
        h = 0;
        m = 0;
        s = 0;
    };    
};

