import React, { useState } from "react";
import "./Flowers.scss";
import { Button } from "antd";
import FlowersDetailModal from "../FlowerDetailModal";
import { EditTwoTone ,DeleteTwoTone } from "@ant-design/icons";

const Flowers = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log("data--->", props.data);
  return (
    <>
      <div className="cards">
        <h2 className="title">
          {props.data.title}
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteTwoTone twoToneColor="white"/>}
            size={"large"}
            className="delete-btn"
          />
        </h2>

        <img src={props.data.img} alt="Rose" className="imgs" />
        <Button
              type="primary"
              shape="circle"
              icon={<EditTwoTone twoToneColor="white"/>}
              size={"large"}
              className='edit-btn'
            />
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
