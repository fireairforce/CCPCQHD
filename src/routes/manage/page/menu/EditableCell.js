import React,{Component}from 'react'
import { Table, Input, InputNumber, Popconfirm, Form,message, Divider } from 'antd';
import { Button } from '../../../../../node_modules/antd/lib/radio';


const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `请输入 ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class Rewriten extends Component {
  constructor(props) {
    super(props);
     this.state = {
      data:'',
     editingKey: ''  
    }
    this.columns = [
      {
        title: '比赛类型',
        dataIndex: 'competeType',
        width: '25%',
        editable: true,
      },
      {
        title: '具体信息',
        dataIndex: 'details',
        width: '15%',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <Button onClick={()=>this.save(form,record.cid)}>保存</Button>
                    )}
                  </EditableContext.Consumer>
                </span>
              ) : (
                <Button onClick={()=>this.edit(record.cid)}>修改</Button>
              )}  <Divider type="vertical" />
            {
              <EditableContext.Consumer>
              {form => (
                <Popconfirm title="请确定是否删除" onConfirm={()=>{this.confirm(form,record.cid)}} onCancel={this.cancel} okText="是" cancelText="否">
                  <Button>删除</Button>
                </Popconfirm>
              )}
            </EditableContext.Consumer>
            }
            </div>
          );
        },
      },
    ];
  }
  confirm(form, cid) {
      const body={
        ...cid
      }
      body.cid=cid
      const url='https://ccpc.elatis.cn/admin/delete/cid/'+body.cid
      console.log(body)
       fetch(url,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
      },
    }).then((res)=>{
      return res.json()
    }).then((json)=>{
      if(json.code===0){
        message.success('删除成功')
        const newData = [...this.state.data];
        const index = newData.findIndex(item => cid === item.cid);//找到该信息在数组中的的索引值
          newData.splice(index,1)
          this.setState({
            data:newData,
            editingKey:''
          })
      }else{
        message.error('删除失败')
      }
    }).catch((e)=>{
      console.log(e)
    })
    }
  
  cancel = () => {
    this.setState({ editingKey: '' });
  };
  componentDidMount(){
    fetch('https://ccpc.elatis.cn/content/type/headerNavs',{
      method:'GET'
    }).then((res)=>{
      return res.json()
        }).then(recieve=>{
          this.setState({
            data:recieve.data
          },
          console.log(this.state.data)
        )
        })
  }
  isEditing = (record) => {
    return record.cid === this.state.editingKey;
  };

  edit(cid) {
    this.setState({ editingKey: cid });
  }

  save(form, cid) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => cid === item.cid);
      console.log(index)
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        console.log(newData)
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        console.log(newData)
        this.setState({ data: newData, editingKey: '' });
      }
      const body={
        ...row,
        ...cid
        
      }
      body.cid=cid
      console.log(body)
       fetch('https://ccpc.elatis.cn/admin/update',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
      },
      body:JSON.stringify(body)
    }).then((res)=>{
      return res.json()
    }).then((json)=>{
      if(json.code===0){
        message.success('修改成功')
      }else{
        message.error('修改失败')
      }
    }).catch((e)=>{
      console.log(e)
    })
    });
  }
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
      />
    );
  }
}
export default Rewriten
