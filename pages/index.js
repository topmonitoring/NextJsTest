import { Hero,MainSection } from "../sections";
import {FaClipboardList,FaSearch,FaPeopleArrows} from 'react-icons/fa';

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const mainSectionProps={
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  bgimage: { src: "/img/background.png", alt: "", width: "100vw", height: "100vh",  },
  BigTitle: "Maneged Agancy Selection",
  SmallTitle:"Stengthen your onboarding process",
  cardData: [
    {
      title: 'Brief',
      icon: <FaClipboardList/>,
      info: '<p> Complete <strong> brief writing or simple guidance </strong> on what to include, we"ve got you covered. </p>',
      variant:"small"
     
    },
    {
      title: 'Search',
      icon: <FaSearch/>,
      info: '<p>In-depth agency search covering; <strong> criteria maching</strong>, door knocking and due-dilligence vetting</p>',
      variant:"medium"
  
    },
    {
      title: 'Pitch',
      icon: <FaPeopleArrows/>,
      info: '<p>Comprehancive <strong>pitch management</strong>, including comms, diary management and pitch hosting</p>',
      variant:"big"
      
    },
  ]
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <MainSection {...mainSectionProps}/>
        {/** Other sections */}
      </div>
    </>
  );
}
