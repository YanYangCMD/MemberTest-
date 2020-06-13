import React from 'react';
import { Card, Avatar, Button, Typography, Table } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;
const dataSource = [
    {
      key: '1',
      number: '1',
      date: '2/3/2020',
      status: 'Present',
    },
    {
      key: '2',
      number: '2',
      date: '9/3/2020',
      status: 'Absent',
    },
  ];
  
  const columns = [
    {
      title: 'No.',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

class CArd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'RUN' }
    }

    onClick(e) {
        this.setState = { title: 'Nigga' }
    }

    render() {
        return (
                <Table 
                style={{width:500}}
                dataSource={dataSource} 
                columns={columns} 
                />
        )
    }

};


export default CArd;