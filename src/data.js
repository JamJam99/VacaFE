import { responsiveFontSize } from "react-native-responsive-dimensions";

const { Slider } = require("react-native-elements");

export const data=[
    {id:1,url:'https://i.ibb.co/9TqB2Nk/top.jpg',title:'destination1'},
    {id:2,url:'https://i.ibb.co/9TqB2Nk/top.jpg',title:'destination2'},
    {id:3,url:'https://i.ibb.co/9TqB2Nk/top.jpg',title:'destination3'},
    {id:4,url:'https://i.ibb.co/9TqB2Nk/top.jpg',title:'destination4'},
    {id:4,url:'https://i.ibb.co/9TqB2Nk/top.jpg',title:'destination5'},
]

export const product=[
    {id:1,url:'https://i.ibb.co/Gt5gzzR/bandung.jpg',
    packageTitle:'Bandung Package',
    subTitle:'Ciwidey Hot Spring Tour',
    images:[
      'https://i.ibb.co/vsybPFw/bandung0.jpg',
      'https://i.ibb.co/Gt5gzzR/bandung.jpg',
      'https://i.ibb.co/61qmHv6/bandung3.jpg',
    ], 
    title:'Explore south of Bandung',
    des:'South Bandung Package',
    price:'RP 400,000',
    headerTitle:'Bandung',
    duration:'Duration 10 Hours',
    include:['Tourguide','Transportation','The attraction tikets','Free docummentation','Gasoline'],
    exclude:['Meals','Personal purchas','Transportation','Extra time'],
    Itinerary:['White Crater','Tea Plantage','Hot Spring','Strawberry farm'],
    about:'We will meet at Braga street at 08.00 WIB in front of Braga Permai Restaurant, we will be waiting for 15 minutes please be on time, thank you. ',
     initialRegion:{
        latitude: -6.917208,
        longitude: 107.609521,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
     },
     marker:{       
      latitude: -6.917421, 
      longitude: 107.609448
     },
     meetingpoint:'Braga Permai Restaurant'



},
    {id:2,url:'https://i.ibb.co/KV1qLHM/yogyakarta.jpg',packageTitle:'Yogyakarta Package',
    
    subTitle:'Borobudur Lava Jeep Tour',
    images:[
      'https://i.ibb.co/QNLGQ15/yogya1.png',
      'https://i.ibb.co/nByddLy/yogya2.jpg',
      'https://i.ibb.co/7KRBqqZ/Whats-App-Image-2020-09-29-at-11-38-13.jpg',
    ],
    title:'Lets go to the Greatest Temple',
    des:'Borobudur Lava Jeep Package',
    price:'RP 450,000',
    headerTitle:'Yogyakarta',
    duration:'Duration 12 Hours',
    include:['Tourguide','Transportation','The attraction tikets','Free docummentation','Mineral water','Lunch'],
    exclude:['Accomodation','Personal purchase','Transportation from original hometown','Tipping'],
    Itinerary:['Going to Tamansari Water Castle','Lava Jeep Tour','Taking Lunch','Go to Borobudur Temple'],
    about:'We will meet at Malioboro street at 06.30 WIB in front of Malioboro Mall, we will be waiting for 15 minutes please be on time, thank you. ',
     initialRegion:{
      latitude: -7.7929604, 
      longitude: 110.3640149,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
     },
     marker:{       
      latitude: -7.7929604, 
      longitude: 110.3640149
     },
     
     meetingpoint:'Malioboro Mall'


},
    {id:3,url:'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/04/Blog_7-Kegiatan-Menarik-yang-Bisa-Dilakukan-di-Karimun-Jawa-696x360.jpg',packageTitle:'Karimunjawa Package',
    
    subTitle:'Snorkling in Resort Tour',
    images:[
      'https://assets-a1.kompasiana.com/items/album/2019/12/15/13-46-13-images-5df5d8a1d541df361d26c4a2.jpg',
      'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/04/Blog_7-Kegiatan-Menarik-yang-Bisa-Dilakukan-di-Karimun-Jawa-696x360.jpg',
      'https://www.indobalitour.com/uploads/tour/tour_201903030318_SnorklingLempuyangTour.jpg',
    ],
    title:'Snorkling in the Javasea',
    des:'Full day Karimunjawa Package',
    price:'RP 350,000',
    headerTitle:'Karimunjawa',
    duration:'Duration 12 Hours',
    include:['Welcome drink','Tourguide','Transportation','Tikets all destination','Free docummentation','3x Meals', 'Ferry Ticket'],
    exclude:['Hotel','Personal purchase','Tipping'],
    Itinerary:['Hikking to "Bukit Love"','Snorkling','BBQ at Resort' ],
    about:'We will meet at Katini Harbor at 05.30 WIB in front of Warung Bu Rudi, we will be waiting for 15 minutes please be on time, thank you. ',
     initialRegion:{
      latitude: -6.5907283, 
      longitude: 110.6456464,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
     },
     marker:{       
      latitude: -6.5907283, 
      longitude: 110.6456464
     },
     
     meetingpoint:'Warung Bu Rudy'

},

]

// const styles = StyleSheet.create({
//   packageTitle: {
//     font
//   }
// })