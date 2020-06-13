import React from 'react';
import "antd/dist/antd.css";
import { Card, Avatar, Row, Col, Divider, Space } from "antd";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";

const CARD = Card;
const Meta = Card;

function Attendance() {
    return (
        <Card style={{ width: 1126, height: 610 }}>
            <h2> Attendance Overview  </h2>
            <Divider />
            <div>
                <Row gutter={12}>
                    <Col span={10} offset={1}>
                        
                    </Col>
                    <Col span={8} offset={1}>
                        
                    </Col>
                </Row>
            </div>
        </Card>
    )
};

export default Attendance;