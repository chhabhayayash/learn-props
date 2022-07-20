import React from "react";
import { Col, Row } from "antd";
import Flowers from "../../MyComponents/Flower";
import './Home.css'
// import FlowersData from "../../MyComponents/FlowersData";
// import FlowersDetailModal from "../../MyComponents/FlowerDetailModal";

const FlowersData = [
  {
    id: 1,
    img: "https://static8.depositphotos.com/1016860/967/i/600/depositphotos_9677015-stock-photo-beautiful-landscape-with-sunflower-field.jpg",
    title: "rose",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    img: "https://static8.depositphotos.com/1016860/967/i/600/depositphotos_9677015-stock-photo-beautiful-landscape-with-sunflower-field.jpg",
    title: "Sun Flower",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    img: "https://static8.depositphotos.com/1016860/967/i/600/depositphotos_9677015-stock-photo-beautiful-landscape-with-sunflower-field.jpg",
    title: "Lotas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    img: "https://static8.depositphotos.com/1016860/967/i/600/depositphotos_9677015-stock-photo-beautiful-landscape-with-sunflower-field.jpg",
    title: "rose",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Home = () => {
  // const data={[{title=values.title},{img=values.img}]}
  return (
    <div className="main" >
      <Row gutter={[20, 20]} className="home">
      {FlowersData.map((values) => {
        console.log(values);
        return (
          <Col className="gutter-row" span={8}>
            {/* <Flowers title={values.title} img={values.img} text={values.text} /> */}
            <Flowers data={values} />
          </Col>
        );
      })}
    </Row>
    </div>
  );
};

export default Home;
