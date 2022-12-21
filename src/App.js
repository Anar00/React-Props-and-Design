import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Suleyman',
    age: 22,
    address: 'Baku',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Reshad',
    age: 22,
    address: 'Baku',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Ali',
    age: 20,
    address: 'Yaponya',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'emin',
    age: 19,
    address: 'Bileceri',
    tags: ['cool', 'teacher'],
  }, {
    key: '5',
    name: 'fuad',
    age: 19,
    address: 'Russia',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Vusal',
    age: 19,
    address: 'Cin',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Ali',
    age: 19,
    address: 'Afrika',
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    name: 'ferid',
    age: 19,
    address: 'Hindistan',
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    name: 'Kenan',
    age: 19,
    address: 'Ukraniya',
    tags: ['cool', 'teacher'],
  },
  {
    key: '10',
    name: 'Nurlan',
    age: 19,
    address: 'Baku',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;