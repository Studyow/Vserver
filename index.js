import express from 'express';
const app = express();
app.use(express.json());
// app.use(express.static('flizard/dist'));
const port = process.env.PORT || 8085;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', function(req,res) {
    res.header('Access-Control-Allow-Origin','*');

    res.header('`Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Ac`cess-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');
    
    res.json(
        [
            {
               "id":34,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/fishgirl%20033%20copy%2014%403x.png?alt=media&token=863a92c4-e04a-439b-836e-b64987056135",
               "name":"MegaTuff",
               "type":"Basic",
               "price":"750",
               "currency":"php",
               "color":"Black",
               "gender":"Women",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"deletefa",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/lv-blck.png?alt=media&token=d17b754d-7ce5-4ee8-bbb6-88819a48e5ea",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Ice%20Halohalo%402x.png?alt=media&token=7f3a1705-cb79-433d-94a9-2766b70dff04",
               "iconT":"20241006114144icn.png",
               "created_at":"2024-10-06T11:41:44.000000Z",
               "updated_at":"2024-10-06T11:41:44.000000Z"
            },
            {
               "id":33,
               "imageURL":"20241006044938.png",
               "name":"Route Stop",
               "type":"Basic",
               "price":"750",
               "currency":"php",
               "color":"Black",
               "gender":"Women",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Aldin Jalipa",
               "img01":"20241006044938frnt.png",
               "img02":"20241006044601bck.png",
               "iconT":"20241006044938icn.jpg",
               "created_at":"2024-10-06T04:46:01.000000Z",
               "updated_at":"2024-10-06T04:49:38.000000Z"
            },
            {
               "id":31,
               "imageURL":"20241006042919cvr.png",
               "name":"Halo-halo Ice Cream",
               "type":"Basic",
               "price":"750",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flizard",
               "img01":"20241006042919frnt.jpg",
               "img02":"20241006042919bck.jpg",
               "iconT":"20241006042919icn.png",
               "created_at":"2024-10-06T04:29:19.000000Z",
               "updated_at":"2024-10-06T04:29:19.000000Z"
            },
            {
               "id":30,
               "imageURL":"20241005171609cvr.png",
               "name":"Rejected Robert",
               "type":"Basic",
               "price":"750",
               "currency":"php",
               "color":"Black",
               "gender":"Unisex",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"FliBuzz",
               "img01":"20241005171609frnt.png",
               "img02":"20241005171609bck.png",
               "iconT":"20241005171609icn.png",
               "created_at":"2024-10-05T17:16:09.000000Z",
               "updated_at":"2024-10-05T17:24:30.000000Z"
            },
            {
               "id":29,
               "imageURL":"20241002155006cvr.png",
               "name":"wer",
               "type":"Basic",
               "price":"750",
               "currency":"php",
               "color":"Grey",
               "gender":"Women",
               "quantity":"34",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"345defgd",
               "img01":"20241002155006frnt.png",
               "img02":"20241002155006bck.png",
               "iconT":"20241002155006icn.png",
               "created_at":"2024-10-02T15:50:06.000000Z",
               "updated_at":"2024-10-02T15:50:06.000000Z"
            }
         ]
    )
})