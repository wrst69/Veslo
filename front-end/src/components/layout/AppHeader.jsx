import { Layout,  Input } from 'antd';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    padding: '1rem',
    display: 'flex',
    backgroundColor: '#22798c',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function AppHeader() {
    return (
      <Layout.Header style={headerStyle}>
          <h1 style={ { fontSize: 50, paddingBottom: 6, marginLeft: 10} }>VesIo</h1>
          <Search 
            style={{
              width: "70%",
            }}
            placeholder="Введите адрес" 
            onSearch={onSearch} 
            enterButton 
          />
      </Layout.Header>
    )
}
