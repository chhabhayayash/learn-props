import React, { useState } from "react";
import { Button, Col, Row, Modal, Input, Form } from "antd";
import Flowers from "../../MyComponents/Flower";
import "./Home.scss";
import AddFlowerModal from "../../MyComponents/AddFlowerModal";
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

/* eslint-disable no-template-curly-in-string */
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="home">
      <Button
        type="primary"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Add Flower
      </Button>
      <Row gutter={[20, 20]} className="flower-list-container">
        {FlowersData.map((values) => {
          console.log(values);
          return (
            <Col className="gutter-row" span={8}>
              <Flowers data={values} />
            </Col>
          );
        })}
      </Row>
      <AddFlowerModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
};

export default Home;
