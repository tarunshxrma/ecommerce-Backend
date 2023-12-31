const get=(req,res)=>{
    res.send([
        {
            "id":1,
            "name":"JBL C100SI Wired ",
            "category": "accessories",
            "description":"Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote, Angled Buds for Comfort fit (Black) ",
            "image":"https://m.media-amazon.com/images/I/615ekapl+pL._AC_UY327_FMwebp_QL65_.jpg",
            "price":599,
            "oPrice":"₹1,299",
            "rating":"4",
            "ratingCount":"10,456",
        },  
        {
            "id":2,
            "name":" PTron Tangentbeat in-Ear Bluetooth 5.0",
            "category": "accessories",
            "description":" Wireless Headphones with Mic, Deep Bass, 10mm Drivers, Clear Calls, Snug-Fit, Fast Charging, Magnetic Buds, Voice Assistant & IPX4 Wireless Neckband",
            "image":"https://m.media-amazon.com/images/I/61rmtdRaDYL._AC_UY327_FMwebp_QL65_.jpg",
            "price":1099,
            "oPrice":"₹2,499",
            "rating":"3",
            "ratingCount":"2,745",
        },  
        {
            "id":3,
            "name":"Wecool Nylon Braided  ",
            "category": "accessories",
            "description":" Fast Charging Cable For Android Smartphone, Ios And Type C Usb Devices, 3 In 1 Charging Cable, 3A, (3 Feet) (Black)",
            "image":"https://m.media-amazon.com/images/I/71DGHA8osEL._AC_UY327_FMwebp_QL65_.jpg",
            "price":549,
            "oPrice":"₹999",
            "rating":"5",
            "ratingCount":"27",
        }, 
        {
            "id":4,
            "name":"Apple Adapter ",
            "category": "accessories",
            "description":" 20W USB-C Power Adapter (for iPhone, iPad & AirPods) ",
            "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61vtLhO6fDL._SY741_.jpg",
            "price":1550,
            "oPrice":"₹1,990",
            "rating":"5",
            "ratingCount":"20,684",
        },  
        {
            "id":5,
            "name":" CableCreation USB C to 3.5mm Headphone",
            "description":" Audio Adapter 2-in-1 USB C Type-C to Hi-Res 3.5mm Audio with PD Fast Charging Adapter, Compatible with OnePlus Nord 2T/10 Pro,Pixel 2/2XL/3/3XL, Aluminum",
            "image":"https://m.media-amazon.com/images/I/31wIjNqXhSL._AC_UY327_FMwebp_QL65_.jpg",
            "price":1550,
            "oPrice":"₹1,700",
            "rating":"4",
            "ratingCount":"589",
        },  
        {
            "id":6,
            "name":"SanDisk Ultra® ",
            "category": "accessories",
            "description":"microSDXC™ UHS-I Card, 256GB, 150MB/s R, 10 Y Warranty, for Smartphones ",
            "image":"https://m.media-amazon.com/images/I/81i8riahalS._AC_UY327_FMwebp_QL65_.jpg",
            "price":1550,
            "oPrice":"₹3,500",
            "rating":"5",
            "ratingCount":"67,890",
        },  
        {
            "id":7,
            "name":" Antenna for GSM",
            "category": "accessories",
            "description":" Robotbanao Authtentic Antenna for GSM FCT Device 10 Feet Long - Pack of 1",
            "image":"https://m.media-amazon.com/images/I/61zYmHyz91L._AC_UY327_FMwebp_QL65_.jpg",
            "price":449,
            "oPrice":"₹700",
            "rating":"4",
            "ratingCount":"2,982",
        },  
        {
            "id":8,
            "name":"Irusu Monster VR Headset ",
            "category": "accessories",
            "description":"  Remote Controller and Conductive Touch Button for VR Supported Smartphones(New Model) (Black) ",
            "image":"https://m.media-amazon.com/images/I/61roP7BaYFL._AC_UY327_FMwebp_QL65_.jpg",
            "price":1800,
            "oPrice":"₹3,200",
            "rating":"3",
            "ratingCount":"20,643",
        },  
        {
            "id":9,
            "name":"UV Phone Steriliser Boxes ",
            "category": "accessories",
            "description":"  Amtidy U99 UV Sanitizer,Portable UV Sterilizer Box 99.9% ",
            "image":"https://m.media-amazon.com/images/I/61uWTYCYmEL._AC_UY327_FMwebp_QL65_.jpg",
            "price":2000,
            "oPrice":"₹4,200",
            "rating":"4",
            "ratingCount":"5,671",
        },  
        {
            "id":10,
            "name":"MI Power Bank 3i ",
            "category": "accessories",
            "description":" 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black ",
            "image":"https://m.media-amazon.com/images/I/61leOAW6L9L._AC_UY327_FMwebp_QL65_.jpg",
            "price":1600,
            "oPrice":"₹2,500",
            "rating":"4",
            "ratingCount":"50,654",
        },  
        {
            "id":11,
            "name":"Selfie Stick ",
            "category": "accessories",
            "description":"Mobilife Bluetooth Extendable,3-in-1 Multifunctional Selfie Stick Tripod for iPhone Samsung Mi  More,Black ",
            "image":"https://m.media-amazon.com/images/I/61SL9S17sOL._AC_UY327_FMwebp_QL65_.jpg",
            "price":700,
            "oPrice":"₹1,400",
            "rating":"4",
            "ratingCount":"2632",
        },  
        {
            "id":12,
            "name":"Samsung Galaxy Buds ",
            "category": "accessories",
            "description":"  Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Upto 21 Hours Playtime, Mystic Black",
            "image":"https://m.media-amazon.com/images/I/71ZB8xdkpcL._AC_UY327_FMwebp_QL65_.jpg",
            "price":4999,
            "oPrice":"₹15,999",
            
        },
    ])
}

module.exports.apiController = get