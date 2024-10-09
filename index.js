import express from 'express';
const app = express();
app.use(express.json());
// app.use(express.static('flizard/dist'));
const port = process.env.PORT || 8085;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/tpath', function(req,res) {
    res.header('Access-Control-Allow-Origin','*');

    res.header('`Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Ac`cess-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');
    
    res.json(
        [{"id":26,"img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Ice%20Halohalo%402x.png?alt=media&token=7f3a1705-cb79-433d-94a9-2766b70dff04","imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%207%403x-8.png?alt=media&token=f6c710fa-253c-41f0-8b7a-be3c974f8f12","name":"Fish Fli-tank","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"4","created_at":"2024-09-14T18:30:08.000000Z","updated_at":"2024-09-14T18:30:08.000000Z"},{"id":25,"imageURL":"20240914182905.png","name":"fish left-tank on the trunk","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Women","quantity":"5","created_at":"2024-09-14T18:29:05.000000Z","updated_at":"2024-09-14T18:29:05.000000Z"},{"id":24,"imageURL":"20240911131718.png","name":"Fli Flight Curve Headed","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"5","created_at":"2024-09-11T13:17:18.000000Z","updated_at":"2024-09-11T13:17:18.000000Z"},{"id":23,"imageURL":"20240906153144.jpg","name":"Mumbai Tree house BXY","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"5","created_at":"2024-09-06T15:31:44.000000Z","updated_at":"2024-09-06T21:25:13.000000Z"},{"id":22,"imageURL":"20240906152949.jpg","name":"Cactus Jam In The Path","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"6","created_at":"2024-09-06T15:29:49.000000Z","updated_at":"2024-09-06T15:29:49.000000Z"},{"id":21,"imageURL":"20240906152809.jpg","name":"Ice Cream halo-halo","type":"Basic","price":"850","currency":"php","color":"Black","gender":"Unisex","quantity":"5","created_at":"2024-09-06T15:28:09.000000Z","updated_at":"2024-09-06T15:28:09.000000Z"},{"id":20,"imageURL":"20240906151146.jpg","name":"Flizard Blue-Green With the Zard CXY","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Men","quantity":"6","created_at":"2024-09-06T15:11:46.000000Z","updated_at":"2024-09-06T15:11:46.000000Z"},{"id":19,"imageURL":"20240906151044.jpg","name":"Flizard Red With the Zard BXY","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"6","created_at":"2024-09-06T15:10:44.000000Z","updated_at":"2024-09-06T15:10:44.000000Z"},{"id":18,"imageURL":"20240906150927.jpg","name":"Flizard With the Zard AXY","type":"Basic","price":"750","currency":"php","color":"Black","gender":"Unisex","quantity":"6","created_at":"2024-09-06T15:09:27.000000Z","updated_at":"2024-09-06T15:09:27.000000Z"}]
    )
})