import { Layout, Divider, List, Typography, Spin, Space, Input} from 'antd';
import { useState, useEffect } from 'react';
import { fakeFetch } from '../../api';

const { Search } = Input;

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#FFFFFF',
    padding: '1rem'
  };



export default function AppContent() {
    //const { loading, objects } = useContext(DataContextProvider);
    const [loading, setLoading] = useState(false)
    const [objects, setObjects] = useState([]);
    
    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetch();

            setObjects(result);
            setLoading(false);
        }

        preload();
    }, [])

    console.log(objects);

    if (loading) {
        return <Spin fullscreen/>
    }

    return (
        <Layout.Content style={contentStyle}>
            <Divider orientation="left">Объекты учета</Divider>
            <List
                size="small"
                dataSource={objects}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text>{item.name}</Typography.Text> 
                    </List.Item>
                )}
            />
        </Layout.Content>
    )
}