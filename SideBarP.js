import React from 'react';
import "antd/dist/antd.css";
import { Menu, Divider } from "antd";
import { 
  HomeOutlined,
  GroupOutlined,
  FireOutlined,
  CalendarOutlined,
  AlignLeftOutlined,
  SafetyOutlined,
  ProfileOutlined,
  ExclamationOutlined,
  SettingOutlined,
  LogoutOutlined,
  InsertRowAboveOutlined,
  FormOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function SideBarP () {
    return (
      <div class="Menu">
      <Menu
        style={{ width: 200 }}
        // This need change   v 
        defaultSelectedKeys={[ ]}
        mode="inline"
      >
        
        <Menu.Item key="1" >
        <a href="/Dashboard" >
        <HomeOutlined/>
          Home
        </a>
        </Menu.Item>

        <Menu.Item key="2" >
        <a href="/Attendance" >
        <GroupOutlined />
           SIGs
        </a>
        </Menu.Item>

        <Menu.Item key="3" >
        <a href="/Calendar" >
        <CalendarOutlined />
           Calendar
        </a>
        </Menu.Item>

        <Menu.Item key="4" >
          <a href="/MembersProfile" >
          <ProfileOutlined />
           Events 
          </a> 
        </Menu.Item>

        <Menu.Item key="5" >
        <a href="/UniformParts" >
        <FireOutlined />
           Training Camps
        </a>
        </Menu.Item>

        <Divider />

        <Menu.Item key="6" >
          <a href="/HelpMe" >
          <ExclamationOutlined />
           Help Me / FAQ
          </a> 
        </Menu.Item>

        <Menu.Item key="7" >
          <a href="/Settings" >
          <SettingOutlined />
           Settings 
          </a> 
        </Menu.Item>

      </Menu>
      </div>
    );
  }


export default SideBarP;