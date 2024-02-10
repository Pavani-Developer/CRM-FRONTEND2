import React, { Component } from 'react';
import { Table, Button, Form, Select, Layout, Space, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import * as XLSX from 'xlsx';

const { Content, Header } = Layout;
const { Option } = Select;

class Mandals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      editingMandal: null,
      loading: true,
      deletingMandal: null,
      editModalVisible: false,
      deleteModalVisible: false,
    };

    this.editForm = React.createRef();
  }

  componentDidMount() {
    this.fetchMandalsData();
  }

  fetchMandalsData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/getmandals/');
      const data = await response.json();
      this.setState({ dataSource: data });
    } catch (error) {
      console.error('Error fetching mandals data:', error);
    }
  };

  handleEditOk = () => {
    this.editForm.current.validateFields().then(async (values) => {
      try {
        const response = await fetch(http://127.0.0.1:8000/api/updatemandal/${this.state.editingMandal.key}, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const updatedDataSource = this.state.dataSource.map((item) =>
            item.key === this.state.editingMandal.key ? { ...item, ...values } : item
          );
          this.setState({
            dataSource: updatedDataSource,
            editingMandal: null,
            editModalVisible: false,
          });
        } else {
          console.error('Failed to update mandal');
        }
      } catch (error) {
        console.error('Error updating mandal:', error);
      }
    });
  };

  handleDeleteOk = () => {
    const updatedDataSource = this.state.dataSource.filter(
      (item) => item.key !== this.state.deletingMandal.key
    );
    this.setState({
      dataSource: updatedDataSource,
      deletingMandal: null,
      deleteModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      editingMandal: null,
      deletingMandal: null,
      editModalVisible: false,
      deleteModalVisible: false,
    });
  };

  handleEdit = (record) => {
    this.setState({ editingMandal: record, editModalVisible: true });
  };

  handleAddRow = () => {
    const newRow = {
      mandalName: 'New Mandal',
    };
    this.setState({ dataSource: [...this.state.dataSource, newRow] });
  };

  showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <DeleteOutlined />,
      content: 'This action cannot be undone.',
      onOk: () => this.handleDelete(id),
    });
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(http://localhost:8000/api/deletemandal/${id});
      // Refresh the page
      this.setState((prevState) => ({
        dataSource: prevState.dataSource.filter((record) => record.Sachivalayam_id !== id),
      }));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  handleFileUpload = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one you want to read
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Log the JSON data to the console
        console.log(jsonData);

        this.sendDataToBackend(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  sendDataToBackend = (data) => {
    const apiUrl = 'http://127.0.0.1:8000/api/passingjsondata/';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: data }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(HTTP error! Status: ${response.status});
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  render() {
    const columns = [
      {
        title: 'S no',
        dataIndex: 'serialNumber',
        key: 'serialNumber',
        width: '10%',
        render: (text, record, index) => index + 1,
      },
      {
        title: 'Mandal Name',
        dataIndex: 'Mandals_name',
        key: 'Mandals_name',
        header: {
          style: { background: '#232549', color: 'rgba(255, 255, 255, 0.88)' },
        },
      },
      {
        key: 'edit',
        title: 'Edit',
        render: (record) => (
          <>
            <EditOutlined
              style={{ color: 'blue', marginLeft: 12 }}
              onClick={() => this.handleEdit(record)}
            />
          </>
        ),
      },
      {
        key: 'delete',
        title: 'Delete',
        render: (record) => (
          <>
            <DeleteOutlined
              style={{ color: 'blue', marginLeft: 12 }}
              onClick={() => this.showDeleteConfirm(record.Sachivalayam_id)}
            />
          </>
        ),
      },
    ];

    return (
      <Layout style={{ background: '#F5F5F5' }}>
        <Header style={{ background: '#fff', textAlign: 'left', padding: '5px', border: '3px solid #dedddd', boxShadow: '5px #dedddd', color: 'blue' }}>
          <Space>
            <h5>Mandals</h5>
          </Space>
        </Header>
        <Content className='container-fluid'>
          <div className='Sachivalayam'>
            <Form layout='inline'>
              <Form.Item name={'constituency'} label='Constituency'>
                <Select defaultValue='' style={{ width: '100%' }}>
                  <Option value='' disabled>
                    Chandragiri
                  </Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <Table
            dataSource={this.state.dataSource}
            columns={columns}
            bordered
            scroll={{ x: '100%', y: 300 }} // Adjust the y value based on your needs
            style={{ borderColor: 'blue', marginTop: 20 }}
            className='custom-table'
            components={{
              header: {
                cell: (props) => <th style={{ backgroundColor: '#113857', color: 'white' }}>{props.children}</th>,
              },
            }}
          />
          <div className='btn'>
            <Button type='primary' onClick={this.handleAddRow}>
              <Link to='addmandal/'>Add</Link>
            </Button>
            <input type='file' className='upload-btn' onChange={this.handleFileUpload} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Mandals;