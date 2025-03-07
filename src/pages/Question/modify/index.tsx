import * as React from "react";
import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ProColumns<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    sorter: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
    ellipsis: true,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    valueType: 'tags',
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_, record) => (
      <Space>
        <Button type="link">{record.name}编辑</Button>
        <Button type="link" danger>删除</Button>
      </Space>
    ),
  },
];

const mockData: DataType[] = [
  {
    id: 1,
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
    tags: ['开发', '设计'],
  },
  {
    id: 2,
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
    tags: ['管理'],
  },
];

const TablePage: React.FC = () => {
  return (
    <ProTable<DataType>
      columns={columns}
      dataSource={mockData}
      rowKey="id"
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
      ]}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      options={{
        density: true,
        fullScreen: true,
        reload: () => {},
        setting: true,
      }}
    />
  );
};

export default TablePage; 