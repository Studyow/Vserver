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
               "price":"699",
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
               "id":33,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2055%403x.png?alt=media&token=1ff84894-85dc-45aa-8752-dd436a3d6101",
               "name":"Mega Toph",
               "type":"Basic",
               "price":"699",
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
               "price":"699",
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
               "id":30,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2061%403x.png?alt=media&token=886d6095-3f33-467c-8d5a-d3d886c77104",
               "name":"Flying Lizard",
               "type":"Basic",
               "price":"699",
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
            {
               "id":29,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2065%403x.png?alt=media&token=8a170a0c-962d-48ad-af8a-2ffbe2b7be23",
               "name":"Route Stop",
               "type":"Basic",
               "price":"699",
               "currency":"php",
               "color":"Grey",
               "gender":"Women",
               "quantity":"34",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flicue",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2054%403x.png?alt=media&token=534799dc-02fa-4a15-811a-537903d54764",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2044%403x.png?alt=media&token=839c6fce-24e0-4172-b245-248e3b441d1d",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2020%20copy%403x.png?alt=media&token=e1d1a8df-bd46-49ed-8f03-4c52a8dd9e14",
               "created_at":"2024-10-02T15:50:06.000000Z",
               "updated_at":"2024-10-02T15:50:06.000000Z"
            },
            {
               "id":28,
               "imageURL":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2057%403x.png?alt=media&token=b66e19df-7ad0-4344-a6d9-4aaa230433c8",
               "name":"Halo-halo Ice-Cream",
               "type":"Basic",
               "price":"699",
               "currency":"php",
               "color":"Black",
               "gender":"Men",
               "quantity":"6",
               "sizeT":"md, lg, xl, xxl, xxxl",
               "ownerID":"Flizard",
               "img01":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2054%403x.png?alt=media&token=534799dc-02fa-4a15-811a-537903d54764",
               "img02":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2049%403x.png?alt=media&token=4303c49a-98b1-46a6-8ebb-692a162bea45",
               "iconT":"https://firebasestorage.googleapis.com/v0/b/trafficana-3f8ca.appspot.com/o/Artboard%2020%20copy%403x.png?alt=media&token=e1d1a8df-bd46-49ed-8f03-4c52a8dd9e14",
               "created_at":"2024-10-06T04:29:19.000000Z",
               "updated_at":"2024-10-06T04:29:19.000000Z"
            },
         ]
    )
})