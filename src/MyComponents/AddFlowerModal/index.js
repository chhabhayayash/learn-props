import React, { useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import "./AddFlowerModal.scss";
import Home from "../../pages/Home";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const AddFlowerModal = (props) => {
  const [form] = Form.useForm();
  const handleFormOnSubmit = (values) => {
    console.log('form--->',form);
    props.onSubmit(values);
    form.resetFields();
   
  };

  return (
    <>
      <Modal
        className="add-flower-modal"
        title="Add Flower"
        visible={props.isVisible}
        footer={null}
        onCancel={() => {
          form.resetFields();
          props.closeModal();
        }}
      >
        <Form {...layout} onFinish={handleFormOnSubmit}  form={form}>
          <Form.Item
            name={"title"}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={"img"} label="Img">
            <Input />
          </Form.Item>
          <Form.Item name={"text"} label="Text">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
            className="submit-btn"
          >
            <Button type="primary" htmlType="submit" size={"large"}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddFlowerModal;
