import React from 'react';
import { Menu, Avatar, Dropdown } from 'antd';
import { DownOutlined, ProfileOutlined, SettingOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import Logo from '/Users/YanYang/test/src/images/logo.png';

const head = (
  <Menu >
    <Menu.Item icon={<ProfileOutlined/>} >
      <a href="/MembersProfile">
        Members Profile 
      </a>
    </Menu.Item>
    <Menu.Item icon={<SettingOutlined/>}>
      <a href="/Settings">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item icon={<LogoutOutlined/>}>
      <a href="/Login">
        Logout 
      </a>
    </Menu.Item>
  </Menu>
);

const noti = (
  <Menu>
    <Menu.Item>
      <a>
        <BellOutlined/>
      </a>
    </Menu.Item>

    <Menu.Item>
      <a>
        <BellOutlined/>
      </a>
    </Menu.Item>

    <Menu.Item>
      <a>
        <BellOutlined/>
      </a>
    </Menu.Item>

    <Menu.Item>
      <a>
        <BellOutlined/>
      </a>
    </Menu.Item>
  </Menu>
);


function TopBar () {
    return (
      <Menu 
       mode="horizontal">
        <Menu.Item/>
        <a href="/Dashboard">
        
        < SettingOutlined />
           EPCOM
        </a>
        <Menu.Item/>
        
        <Menu.Item key="M1" style={{ position: 'absolute', right: 210 }} >
        <Dropdown 
        overlay={noti}
        placement="bottomCenter">
          <a> <BellOutlined/> </a>
        </Dropdown>
        </Menu.Item>
        
        <Menu.Item key="M2" style={{ position: 'absolute', right: 10 }}>
        <Avatar src="images/logo.png"/>
        <Dropdown overlay={head}>
          <a> Sherlock Holmes  <DownOutlined /> </a>
        </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }


export default TopBar;