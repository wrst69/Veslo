import { Layout } from 'antd';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#5b807f',
  };

export default function AppSider() {
    return (
        <Layout.Sider width="20%" style={siderStyle}>
          Sider
        </Layout.Sider>
    )
}