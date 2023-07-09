import "./CarouselApp.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="calendar.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="activity tracker.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="WatchParty.png" />
      )
    },{
      key: uuidv4(),
      content: (
        <Card imagen="calendar.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="activity tracker.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="WatchParty.png" />
      )
    }
  ];
  return (
    <div className="">
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
