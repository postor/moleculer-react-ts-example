import { Layout, Breadcrumb, Spin } from 'antd';
import { HeaderNav } from './HeaderNav'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const { Header, Content, Footer } = Layout;
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

export const DefaultLayout = () => <Router>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <HeaderNav />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Suspense fallback={<Spin size="large" />}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
</Router>