function generateColShapes() {
    var specialColshape = mp.colshapes.newSphere(22.18, 23.70, 70, 3);
    specialColShape.setVariable('PersonalVehicle', 'Ambulance');
    var specialColshapeText = mp.labels.new('Ambulance', new vector3(22.18, 23.70, 70), { drawDistance: 10 });
    var specialColShapeMarker = mp.markers.new(1, new vector3(22.18, 23.70, 70), 3, { color: [255, 255, 255, 100], visible: true});
};

generateColShapes();

mp.events.add('playerEnterColshape', (player, colshape) => {
    var currentVehicle = colshape.getVariable('PersonalVehicle');
    if  ( currentVehicle == null) return;
    player.outputChatBox('you just got your Ambulance')
});