import React from 'react';
import Layout from '../layout';
import defaultPhoto from '../../assets/default_profile.png';
import { createAdvert } from '../../api/adverts';
import 'antd/dist/antd.css';
import './NewAdvertPage.css';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Upload,
  Button,
  
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Option } = Select;


const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};


class NewAdvertPage extends React.Component {
    state = {
        advert: { name:'', price:'', tags:[],sale: false, photo: {defaultPhoto}},
        error: null,
        createdAdvertId: null,

      };

  /*handleChange = ({ target: { value } }) => {
    this.setState({ advert: { name: value } });
    
   }*/

   

  handleChange = event => {
    this.setState(state => ({
      advert: { ...state.advert, [event.target.name]: event.target.value },
    }));
  };
    

    handleSubmit = async ev => {
        const { advert } = this.state;
        
        //ev.preventDefault();
        try {
          console.log(advert)
          const createdAdvert = await createAdvert(advert);
          console.log(createdAdvert)
          this.setState({ createdAdvertId: createdAdvert.result._id });
        } catch (error) {
          this.setState({ error });
        }
      };
    
    
    componentDidMount() {
      //this.textAreaRef.current.focus();
    }
    
    
  render() {
    const {
        advert: { name , price, tags, sale, photo},
        createdAdvertId,
      } = this.state;
    
    
    if (createdAdvertId) {
      
      return <Redirect to={`/advert/${createdAdvertId}`} />;
    } else{

    
  
  
    return (
        <Layout title="New Advert">
          <div
            className="newAdvertPage bordered"
            style={{ borderBottomWidth: 10 }}
          >
            
            <div className="right">
              <Form {...formItemLayout}  onFinish={this.handleSubmit}>
               <Form.Item label="name">
                  <Input name="name" value={name} onChange={this.handleChange}/>
               </Form.Item>
               <Form.Item label="price">
                 <InputNumber name ="price" value= {price} onChange={( value ) => this.handleChange({ target: {value, name: 'price'}})}/>
               </Form.Item>
               <Form.Item
                 name="tags"
                 label="tags"
                 rules={[
                   {
                    required: false,
                    message: 'Please select your tags!',
                    type: 'array',
                  },
                ]}
                >
                 <Select mode="multiple" value= {tags} onChange={( value ) => this.handleChange({ target: {value, name: 'tags'}})}>
                   <Option value="work"    >work</Option>
                    <Option value="mobile"  > mobile</Option>
                    <Option value="lifestyle"  >lifestyle</Option>
                    <Option value="motor"   >motor</Option>
                  </Select>
                 </Form.Item>
               
               <Form.Item name="switch" label="Sale?" valuePropName="checked" >
                   <Switch value= {sale} onChange={( value ) => this.handleChange({ target: {value, name: 'sale'}})}/>
               </Form.Item>
               <Form.Item label="Dragger">
                 <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                   <Upload.Dragger name="files"  action="/images/anuncios">
                     <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                   </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
                <p>Good to go?...then SUBMIT here!</p>
                
                  
                <Form.Item
                  wrapperCol={{
                  span: 12,
                  offset: 6,
                  }}
                >
                  <Button type="primary" htmlType="submit" disabled={!name}>
                  Submit
                 </Button>
                </Form.Item>
                
                 
            
              </Form>
            </div>
          </div>
        </Layout>
      );
   }
  }
}

export default NewAdvertPage;
