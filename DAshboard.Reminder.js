import React from 'react';
import { Card, Avatar, Button, Typography, Table, Divider, Collapse, Row, Col, Tag, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const Text = Typography;

const text =
  <div>
    <Row gutter='6'>
      <Col span={8}>
        <h4>
          Date 
        </h4>
        <h4>
          Venue
        </h4>
        <h4>
          FactSheet 
        </h4>
      </Col>
      <Col span={16}>
        <h4>
        21 Nov ->> 21 Dec 2020
        </h4>
        <h4>
        Epcom HQ 
        </h4>
        <a href='/Calendar'> Click Here </a>
        </Col>
    </Row>
  </div>
  ;


class CArd extends React.Component {
  render() {
    return (
      <Collapse
        accordion
        title={<a>Reminder</a>}
        bordered={true}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header={<h3><Space>Annual Mega Boot Camp<Tag color="#f50">1 week left  </Tag></Space></h3>}
          key="1"
          className="site-collapse-custom-panel"
        >
          <p>{text}</p>
        </Panel>
        <Divider />
        <Panel header={<h3>Squad Leadership Training Camp</h3>} key="2" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
        <Divider />
        <Panel header={<h3>Annual Training Camp </h3>} key="3" className="site-collapse-custom-panel">
          <p>{text}</p>
        </Panel>
      </Collapse>
    )
  }

};


export default CArd;