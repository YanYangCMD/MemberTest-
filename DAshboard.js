import React from 'react';
import "antd/dist/antd.css";
import { Card, Avatar, Row, Col, Divider, Space } from "antd";
import CArousel from '../components/Carousel';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import Reminder from './DAshboard.Reminder'
import Attendance from './DAshboard.Attendance';

const CARD = Card;
const Meta = Card;

function DAshboard() {
    return (
        <Card style={{ width: 1111, height: 900 }}>
            <CArousel />
            <Divider />
            <div>
                <Row gutter={12}>
                    <Col span={10} offset={1}>
                        <h2>Reminder</h2>
                        <Reminder />
                    </Col>
                    <Col span={8} offset={1}>
                        <h2>Weekly Meeting Attendance</h2>
                        <Attendance />
                    </Col>
                </Row>
            </div>
        </Card>
    )
};

export default DAshboard;