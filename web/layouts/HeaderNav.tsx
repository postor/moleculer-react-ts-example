import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
export const HeaderNav = () => {
  return <Menu theme="dark" mode="horizontal">
    <Menu.Item key="home"><NavLink to="/">首页</NavLink></Menu.Item>
    <Menu.Item key="about"><NavLink to="/about">关于</NavLink></Menu.Item>
  </Menu>
}
