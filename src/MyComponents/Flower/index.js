import React, { useState } from "react";
import "./Flowers.scss";
import { Button } from "antd";
import FlowersDetailModal from "../FlowerDetailModal";
const Flowers = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("data--->", props.data);
  return (
    <>
      
        <div className="cards">
          <h2 className="title">{props.data.title}</h2>
          <img src={props.data.img} alt="Rose" className="imgs" />
          <Button
            className="read-more-btn"
            type="primary"
            shape="round"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Read More
          </Button>
          {/* <FlowersDetailModal isModalVisible={isModalVisible} handleCancel={handleCancel} title={props.title} img={props.img} text={props.text} /> */}
          <FlowersDetailModal
            isModalVisible={isModalVisible}
            handleCancel={() => {
              setIsModalVisible(false);
            }}
            data={props.data}
          />
        </div>
      
    </>
  );
};

export default Flowers;
