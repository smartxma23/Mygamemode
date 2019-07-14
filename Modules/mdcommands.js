function generateColShapes() {
    var specialColshape = mp.colshapes.newSphere(329, -558, 25.3, 3);
    specialColshape.setVariable('PersonalVehicle', 'Ambulance');
    var specialColshapeText = mp.labels.new('Ambulance', new mp.Vector3(329, -558, 25.3), { drawDistance: 10 });
    var specialColShapeMarker = mp.markers.new(1, new mp.Vector3(329, -558, 25.3), 3, { color: [255, 255, 255, 100], visible: true});
};

generateColShapes();

mp.events.add('playerEnterColshape', (player, colshape) => {
    var currentVehicle = colshape.getVariable('PersonalVehicle');
    if  ( currentVehicle == null) 
    return;
    var spawnedVehicle = mp.vehicles.new(mp .joaat(vehicleType), player.position)
    player.setVariable('PersonalVehicle', spawnedVehicle);
    player.outputChatBox('you just got your Ambulance')
});