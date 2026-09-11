import { Icon } from 'lucide-react';
import { FaGithub, FaLinkedin,FaWhatsapp ,FaInstagram, FaFacebook , FaHtml5, FaCss3, FaReact, FaAws } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiNodedotjs, SiTypescript, SiThreedotjs, SiGsap } from 'react-icons/si'


const Navitems = [
    {
        name: "Home",
        href: "#/home",
    },
    {
        name: "About",
        href: "#/about",
    },
    {
        name: "Testimonials",
        href: "#/testimonials",
    },
    {
        name: "Contacts",
        href: "#/contact",
    },
];

const bentoSocialLinks = [
    {
        name: "Facebook",
        Icon: FaFacebook,
        href: 'www.faceboo.com'
    },
    {
        name: "linkdln",
        Icon : FaLinkedin,
        href: 'www.facebook.com'
    },
    {
        name: "Github",
        Icon : FaGithub,
        href: 'www.faceboo.com'
    },
    {
        name: "Instagram",
        Icon : FaInstagram,
        href: 'www.faceboo.com'
    },
]

const iconslist = [
    {
        name: "HTML",
        Icon : FaHtml5
    },
    {
        name: "CSS",
        Icon : FaCss3,
    },
    {
        name: "React",
        Icon : FaReact,
    },
    {
        name: "JavaScript",
        Icon : SiJavascript,
    },
    {
        name: "TypeScript",
        Icon : SiTypescript,
    },
    {
        name: "Node",
        Icon : SiNodedotjs,
    },
    {
        name: "Next",
        Icon : SiNextdotjs,
    },
    {
        name: "Three.js",
        Icon : SiThreedotjs,
    },
    {
        name:"Gsap",
        Icon : SiGsap,
    },
    {
        name:"TailwindCss",
        Icon : SiTailwindcss,
    },
    {
        name:"MongoDb",
        Icon : SiMongodb,
    },
    {
        name:"PostgreSQL",
        Icon : SiPostgresql,
    },
    ]

    const testimonials = [
  {
    name: "Ananya Sharma",
    position: "Founder, Urban Nest Interiors",
    review: "Big Bearss ne humari website ko bilkul professional look diya. Turnaround time bhi kaafi fast tha.",
    imgPath: ""
  },
  {
    name: "Rohit Malhotra",
    position: "CEO, FitZone Gym Chain",
    review: "CRM system banwaya tha inse — leads track karna bahut easy ho gaya hai ab. Recommend karunga.",
    imgPath: ""
  },
  {
    name: "Priya Nair",
    position: "Marketing Head, Coastal Spices Co.",
    review: "SEO aur digital marketing dono handle kiya inhone — 3 mahine mein organic traffic double ho gaya.",
    imgPath: ""
  },
  {
    name: "Vikram Desai",
    position: "Owner, Desai Auto Parts",
    review: "Flutter app banwaya tha customers ke liye order tracking ke liye — smooth kaam kiya team ne.",
    imgPath: ""
  },
];

const footIcons = [
    {
        name: "Facebook",
        Icon: FaFacebook,
        href: 'www.faceboo.com'
    },
    {
        name: "linkdln",
        Icon : FaLinkedin,
        href: 'www.facebook.com'
    },
    {
        name: "Github",
        Icon : FaGithub,
        href: 'www.faceboo.com'
    },
    {
        name: "Instagram",
        Icon : FaInstagram,
        href: 'www.faceboo.com'
    },
    {
        name : "Whatsapp",
        Icon : FaWhatsapp,
        href : "www.whatsapp.com"
    }
]
// const svgimg = [
//     {
//         name : "arrow", img
//     }
// ]

const AboutData = [
    {
    id : 1,
    name : "WEB DESIGN & DEV",
    dis : 'ksdkfjsdfkjdfjidjfjdio'
    },
    {
    id : 2,
    name : "WEB DESIGN & DEV",
    dis : 'ksdkfjsdfkjdfjidjfjdio'
    },
    {
    id : 3,
    name : "WEB DESIGN & DEV",
    dis : 'ksdkfjsdfkjdfjidjfjdio'
    },
    {
    id : 4,
    name : "WEB DESIGN & DEV",
    dis : 'ksdkfjsdfkjdfjidjfjdio'
    },
     
]

export{
    Navitems,
    footIcons,
    iconslist,
    bentoSocialLinks,
    testimonials,
    AboutData
}