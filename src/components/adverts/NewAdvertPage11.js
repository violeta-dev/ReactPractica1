import React from 'react';
import Layout from '../layout';
import { Button,Photo, Textarea } from '../shared';
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
        advert: { name:'', price:''},
        error: null,
        createdAdvertId: null,

      };
   // textAreaRef = React.createRef();
   

    handleChange = ({ target: { value } }) => {
     this.setState({ advert: { name: value } });
    };

    handleSubmit = async ev => {
        const { advert } = this.state;
        
        ev.preventDefault();
        try {
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
        advert: { name , price},
        createdAdvertId,
      } = this.state;
    console.log(createdAdvertId)
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
              <form   onSubmit={this.handleSubmit}>
               <Form.Item label="Name">
                  <Input value= {name} onChange={this.handleChange}/>
               </Form.Item>
               <Form.Item label="Price in Euros">
                 <InputNumber value= {price} onChange={this.handleChange} />
               </Form.Item>
               <Form.Item
                 name="select-multiple"
                 label="Select tags"
                 rules={[
                   {
                    required: false,
                    message: 'Please select your tags!',
                    type: 'array',
                  },
                ]}
                >
                 <Select mode="multiple" placeholder="Please select favourite colors">
                   <Option value="work" >work</Option>
                    <Option value="mobile"> mobile</Option>
                    <Option value="lifestyle">lifestyle</Option>
                    <Option value="motor">motor</Option>
                  </Select>
                 </Form.Item>
               
               <Form.Item name="switch" label="Sale?" valuePropName="checked">
                   <Switch />
               </Form.Item>
               <Form.Item label="Dragger">
                 <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                   <Upload.Dragger name="files" action="/images/anuncios">
                     <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                   </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
                <p>Good to go?...then SUBMIT here!</p>
                <div className="newAdvertPage-footer">
                <span className="newAdvertPage-characters"></span>
                  
                <Button
                  type="submit"
                  className="newAdvertPage-submit"
                  variant="primary"
                  disabled={!name}

                >
                  Submit
                </Button>
                
                 
                </div>
              </form>
            </div>
          </div>
        </Layout>
      );
   }
  }
}

export default NewAdvertPage;
