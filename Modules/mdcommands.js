function generateColShapes() {
    var specialColshape = mp.colshapes.newSphere(329, -558, 28, 3);
    specialColshape.setVariable('PersonalVehicle', 'Ambulance');
    var specialColshapeText = mp.labels.new('Ambulance', new mp.Vector3(329, -558, 28), { drawDistance: 10 });
    var specialColShapeMarker = mp.markers.new(1, new mp.Vector3(329, -558, 28), 3, { color: [255, 255, 255, 100], visible: true});
};

generateColShapes();

mp.events.add('playerEnterColshape', (player, colshape) => {
    var currentVehicle = player.getVariable('PersonalVehicle');

    if (currentVehicle != null){
        currentVehicle.destroy();
        player.outputChatBox('Vehicle was despawned');
    };
    var spawnedVehicle = mp.vehicles.new(mp .joaat('ambulance'), player.position);
    player.setVariable('PersonalVehicle', spawnedVehicle);
});

let medicalBlip = mp.blips.new(61, new mp.Vector3(360, -589, 0),
    {
        name: 'Los Santos Medical Departement',
        color: 1,
        shortRange: true,
});


//ignore