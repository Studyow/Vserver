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
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2063%403x.png?alt=media&token=9e63c83b-fa82-49ad-ab7c-4e95a2ae65f4",
               "name":"Stewie G Rejected Robert",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Fishivy",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2045%403x.png?alt=media&token=a52527bc-ec42-42e5-a61d-b6ff1f25c8d4",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2046%403x.png?alt=media&token=e9903f84-6891-4088-9fdd-b0ce6f43994e",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%205%20copy%202%403x.png?alt=media&token=ca6b6222-4c4a-4523-8076-714d2c62fbf6",
               "created_at":"2024-10-06T11:41:44.000000Z",
               "updated_at":"2024-10-06T11:41:44.000000Z"
            },
            {
               "id":28,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/bunny%2065%403x.png?alt=media&token=622043fe-804b-4fe0-a2ee-f46c7435312a",
               "name":"Dark Bunny Black Oil",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flizard",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2054%403x.png?alt=media&token=534799dc-02fa-4a15-811a-537903d54764",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/bunny44%403x.png?alt=media&token=ec7c8cb4-51ef-4fbb-9cb0-b6200e547761",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2061%403x.png?alt=media&token=886d6095-3f33-467c-8d5a-d3d886c77104",
               "created_at":"2024-10-06T04:29:19.000000Z",
               "updated_at":"2024-10-06T04:29:19.000000Z"
            },
            {
               "id":33,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2055%403x.png?alt=media&token=1ff84894-85dc-45aa-8752-dd436a3d6101",
               "name":"Mega Toph",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Women",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Cheezyfy",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2054%403x.png?alt=media&token=534799dc-02fa-4a15-811a-537903d54764",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2053%403x.png?alt=media&token=ebbe1477-3d7a-4f65-ad0c-614e2e9d4493",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%205%20copy%203%403x.png?alt=media&token=6db69719-8a4d-4526-9010-043fcfe05630",
               "created_at":"2024-10-06T04:46:01.000000Z",
               "updated_at":"2024-10-06T04:49:38.000000Z"
            },
            {
               "id":31,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2057%403x.png?alt=media&token=b66e19df-7ad0-4344-a6d9-4aaa230433c8",
               "name":"Halo-halo Ice-Cream + Flizard",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flizard",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2052%403x.png?alt=media&token=c60a4ec1-f11a-4373-874c-2f0674282550",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2051%403x.png?alt=media&token=ab40b7eb-5664-4093-8f38-46744549324d",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%205%20copy%403x.png?alt=media&token=50778d84-61a8-4a3b-91ba-2c194e9eb719",
               "created_at":"2024-10-06T04:29:19.000000Z",
               "updated_at":"2024-10-06T04:29:19.000000Z"
            },
             {
               "id":36,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/OTHUH%403x.png?alt=media&token=8c67dd28-d052-4b6e-bca9-ee418bd95b01",
               "name":"JEllOW Not-Soo",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flizard",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/FRONTHMP%403x.png?alt=media&token=e00125fe-525a-4faa-bbb2-d9085afc4db9",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/BACKTLT%403x.png?alt=media&token=85dff6e9-6997-46b7-b161-3dad7ff89b54",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%205%20copy%203%403x.png?alt=media&token=6db69719-8a4d-4526-9010-043fcfe05630",
               "created_at":"2024-10-06T04:29:19.000000Z",
               "updated_at":"2024-10-06T04:29:19.000000Z"
            },
            {
               "id":30,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2061%403x.png?alt=media&token=886d6095-3f33-467c-8d5a-d3d886c77104",
               "name":"Flying Lizard",
               "type":"Basic",
               "price":"600",
               "currency":"php",
               "color":"Black",
               "gender":"Unisex",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"FliBuzz",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2054%403x.png?alt=media&token=534799dc-02fa-4a15-811a-537903d54764",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2047%403x.png?alt=media&token=04808298-5c87-4d77-9e4d-9d705bab51af",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%205%20copy%202%403x.png?alt=media&token=ca6b6222-4c4a-4523-8076-714d2c62fbf6",
               "created_at":"2024-10-05T17:16:09.000000Z",
               "updated_at":"2024-10-05T17:24:30.000000Z"
            },
            
         ]
    )
})
