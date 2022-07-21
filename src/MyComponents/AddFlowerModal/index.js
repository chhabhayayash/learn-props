import React from "react";
import { Button, Modal, Input, Form } from "antd";
import "./AddFlowerModal.scss";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const AddFlowerModal = (props) => {
  return (
    <Modal
      className="add-flower-modal"
      title="Add Flower"
      visible={props.isModalVisible}
      footer={null}
      onOk={() => {
        props.setIsModalVisible(false);
      }}
      onCancel={() => {
        props.setIsModalVisible(false);
      }}
    >
      <Form {...layout}>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "img"]} label="Img">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "text"]} label="Text">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }} className='submit-btn'>
          <Button type="primary" htmlType="submit" size={"large"}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddFlowerModal;
