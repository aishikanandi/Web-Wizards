import "./CarouselApp.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="DBpedia_screenshot.jpeg" name="DBPedia" description="DBpedia is a project aiming to extract structured content from the information created in the Wikipedia project."/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen='FFmpeg_screenshot.jpeg'
        name="FFmpeg"
        description="FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="Ignitus_screenshot.jpeg"
        name="Ignitus"
        description="Ignitus a non-profit organization that helps students and professionals across the world get handpicked top quality global research and industrial internships, for free!"
       />
      )
    },{
      key: uuidv4(),
      content: (
        <Card imagen="Evote_screenshot.jpeg"
        name="IBM/EVOTE"
        description="A voting application that leverages Hyperledger Fabric and the IBM Blockchain Platform to record and tally ballots."
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="FreeCodeCamp_screenshot.jpeg"
        name="Free Code Camp"
        description="Platform to learn to code for free with millions of other people around the world"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen='Haiku_screenshot.jpeg'
        name="Haiku"
        description="An open-source operating system that specifically targets personal computing."/>
      )
    }
  ];
  return (
    <div>
      <Carousel
        cards={cards}
        height="500px"
        width="40%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
