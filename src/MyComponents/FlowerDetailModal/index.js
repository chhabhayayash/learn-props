import React from "react";
import {Modal } from "antd";
import "./FlowerDetailModal.scss";

const modal = (props) => {
  return (
    <Modal
      title={props.data.title}
      visible={props.isModalVisible}
      onCancel={props.handleCancel}
      footer={null}
      className="flower-detail-modal"
    >
      <div className="cards">
        <img src={props.data.img} alt="Rose" className="imgs" />
        <p className="modal-text">&emsp;&emsp;{props.data.text}</p>
      </div>
    </Modal>
  );
};

export default modal;
