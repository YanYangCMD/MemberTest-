import React from 'react';
import "antd/dist/antd.css";
import { Menu, Divider, Typography } from "antd";
import { 
  HomeOutlined,
  LineChartOutlined,
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
  MenuOutlined 
} from "@ant-design/icons";
import '/Users/YanYang/test/src/css/SideBar.css';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;

function SideBar() {
    return (
      <div>
      <Menu
        style={{ width: 200,fontSize:14 }}
        // This need change   v 
        defaultSelectedKeys={[ ]}
        mode="inline"
      >

        <Menu.Item key="1" >
        <a href="/Dashboard" class='Words'>
        <HomeOutlined/>
            Dashboard
        </a>
        </Menu.Item>

        <Menu.Item key="2" >
        <a href="/Attendance" class='Words'>
        <LineChartOutlined />
           Attendance
        </a>
        </Menu.Item>

        <SubMenu key="sub1" icon={<SafetyOutlined />} title={<a href="/" class='Words'>Awards</a>} >
          <Menu.Item key="3">
          <a href="/Overview" class='Words'>
          <InsertRowAboveOutlined />
           Overview
          </a> 
          </Menu.Item>
          
          <Menu.Item key="4"> 
          <a href="/Registration" class='Words'>
          <FormOutlined />
           Registration
          </a> 
          </Menu.Item>

          <Menu.Item key="5">
          <a href="/Purchase" class='Words'>
          <ShoppingCartOutlined />
           Purchase
          </a> 
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="6" >
        <a href="/Calendar" class='Words'>
        <CalendarOutlined />
           Calendar
        </a>
        </Menu.Item>

        <Menu.Item key="7" >
          <a href="/MembersProfile" class='Words' >
          <ProfileOutlined />
           Member's Profile
          </a> 
        </Menu.Item>

        <Menu.Item key="8" >
        <a href="/UniformParts" class='Words'>
        <AlignLeftOutlined />
           Uniform Parts
        </a>
        </Menu.Item>

        <Divider />

        <Menu.Item key="9" >
          <a href="/HelpMe" class='Words'>
          <ExclamationOutlined />
           Help Me 
          </a> 
        </Menu.Item>

        <Menu.Item key="10" >
          <a href="/Settings" class='Words'>
          <SettingOutlined />
           Settings 
          </a> 
        </Menu.Item>

        <Menu.Item key="11" >
          <a href="/Login" class='Words'>
          <LogoutOutlined />
           Logout  
          </a> 
        </Menu.Item>
      </Menu>
      </div>
    );
  }


export default SideBar;