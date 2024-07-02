import airbnbjpg from "../assets/airbnb.jpeg"
import airbnb1 from "../assets/airbnb1.jpg"
import airbnb2 from "../assets/airbnb2.jpg"
import airbnb3 from "../assets/airbnb3.jpg"
import airbnb4 from "../assets/airbnb4.jpg"
import region1 from "../assets/region1.jpg"
import region2 from "../assets/region2.jpg"
import region3 from "../assets/region3.webp"
import region4 from "../assets/region4.webp"
import region5 from "../assets/region5.webp"
import region6 from "../assets/region6.webp"
import { FaCampground } from "react-icons/fa";
import { TbTagStarred } from "react-icons/tb";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoSnowOutline } from "react-icons/io5";
import { CiMountain1 } from "react-icons/ci";
import { GiWindow } from "react-icons/gi";
import { PiWindmillBold } from "react-icons/pi";
import { MdCastle } from "react-icons/md";
import { LuSailboat } from "react-icons/lu";
import { PiGolf } from "react-icons/pi";
import { GiWoodCabin } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { FaFireAlt } from "react-icons/fa";
import { TbCamper } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { MdSurfing } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

export const houses = [
    {
      id:1,
      hosted_by:"Julia",
      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],
      
      images:[airbnb1,airbnb2,airbnb3,airbnbjpg,airbnb4]
    },
    {
      id:2,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb2,airbnb3,airbnb1,airbnbjpg]
    },
    {
      id:3,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb3,airbnb1,airbnb2,airbnbjpg]
    },
    {
      id:9,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb1,airbnb2,airbnb3,airbnbjpg]
    },
    {
      id:10,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      images:[airbnb1,airbnb2,airbnb3,airbnbjpg]
    },
    {
      id:4,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb1,airbnb2,airbnb3,airbnbjpg]
    },
    {
      id:5,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb2,airbnb3,airbnb1,airbnbjpg]
    },
    {
      id:6,
      hosted_by:"Julia",

      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb3,airbnb1,airbnb2,airbnbjpg]
    },
    {
      id:7,
      hosted_by:"Julia",
      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],
      title:"Stunning Eiffel Tower view in your home",
      images:[airbnb1,airbnb2,airbnb3,airbnbjpg]
    },
    {
      id:8,
      hosted_by:"Julia",
      country:"France",
      city:"Paris",
      lat:31.21,
      lang:41.22,
      price:200,
      title:"Stunning Eiffel Tower view in your home",
      utilities:["2 bedroom","2 bathroom","3 guests","2 beds"],

      images:[airbnb1,airbnb2,airbnb3,airbnbjpg]
    },

]

export const iconsData = [
  {
    id:1,
    icon:TbTagStarred,
    title:"Icons"

  },
  {
    id:2,
    icon:FaCampground,
    title:"camping"

  },
  {
    id:3,
    icon:FaUmbrellaBeach,
    title:"Beach Front"

  },
  {
    id:4,
    icon:LiaSwimmingPoolSolid,
    title:"Pools"

  },
  {
    id:5,
    icon:IoSnowOutline,
    title:"Arctic"

  },
  {
    id:6,
    icon:CiMountain1,
    title:"Top of the world"

  },
  {
    id:7,
    icon:GiWindow,
    title:"Riads"

  },
  {
    id:8,
    icon:PiWindmillBold,
    title:"Windmills"

  },
  {
    id:9,
    icon:MdCastle,
    title:"Castles"

  },
  {
    id:10,
    icon:LuSailboat,
    title:"Boats"

  },
  {
    id:11,
    icon:PiGolf,
    title:"Golf"

  },
  {
    id:12,
    icon:GiWoodCabin,
    title:"Cabins"

  },
  {
    id:13,
    icon:PiFarm,
    title:"Farms",
  },
  {
    id:14,
    icon:FaFireAlt,
    title:"Trending",
  },
  {
    id:15,
    icon:TbCamper,
    title:"Campers",
  },
  {
    id:16,
    icon:GiIsland,
    title:"Islands",
  },
  {
    id:17,
    icon:MdSurfing,
    title:"Surfing",
  },
  {
    id:18,
    icon:MdSurfing,
    title:"Surfing",
  },
  {
    id:19,
    icon:GiTreehouse,
    title:"Treehouses",
  },
  {
    id:20,
    icon:FaSkiing,
    title:"Skiing",
  },
  {
    id:21,
    icon:LuChefHat,
    title:"Cheef's kitchens",
  },
]
export const footerData = [
  {
    title:"Popular",
    name:"popular",
    cities:[
      {city_name: "Phoenix", type: "Apartment Rentals"},
      {city_name: "Prague", type: "Pet-friendly Rentals"},
      {city_name: "York", type: "House Rentals"},
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Phoenix", type: "Apartment Rentals"},
      {city_name: "Prague", type: "Pet-friendly Rentals"},
      {city_name: "York", type: "House Rentals"},
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ],
  },

  {
    title:"Art & Culture",
    name:"art",
    cities:[
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Phoenix", type: "Apartment Rentals"},
      {city_name: "Prague", type: "Pet-friendly Rentals"},
      {city_name: "York", type: "House Rentals"},
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ]
  },
    {
    title:"Mountains",
    name:"mountains",
    cities:[
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ]
  },
    {
    title:"Outdoors",
    name:"outdoors",
    cities:[
      {city_name: "York", type: "House Rentals"},
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ]
  },
    {
    title:"Beach",
    name:"beach",
    cities:[
      {city_name: "Rome", type: "Condo Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ]
  },
    {
    title:"Unique Stays",
    name:"unique_stays",
    cities:[
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
    ]
  },
  {
    title:"Categories",
    name:"categories",
    cities:[
    
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
       {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
    ]
  },
  {
    title:"Things To Do",
    name:"things_to_do",
    cities:[
   
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
      {city_name: "Duluth", type: "Beach House Rentals"},
    ]
  },
  {
    title:"Travel & Inspiration",
    name:"travel_&_inspiration",
    cities:[
   
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
      {city_name: "Duluth", type: "Beach House Rentals"},
    ]
  },
  {
    title:"Airbnb-friendly apartments",
    name:"airbnb_apartments",
    cities:[
   
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"},
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
      {city_name: "Duluth", type: "Beach House Rentals"},
      {city_name: "Valencia", type: "Cabin Rentals"},
      {city_name: "Edinburgh", type: "Villa Rentals"},
      {city_name: "Seattle", type: "Lakehouse Rentals"}, 
      {city_name: "Duluth", type: "Beach House Rentals"},
    ]
  },
  
]


export const regions = [
  {
    id:1,
    img:region1,
    name:"I'm flexible",

  },
  {
    id:2,
    img:region2,
    name:"Europe",

  },
  {
    id:3,
    img:region3,
    name:"Italy",

  },
  {
    id:4,
    img:region4,
    name:"Southeast Asia",

  },
  {
    id:5,
    img:region5,
    name:"Greece",

  },
  {
    id:6,
    img:region6,
    name:"United State",

  },
]