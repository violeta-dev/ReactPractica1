import React from 'react';

import { searchAdvert } from '../../api/adverts';
import 'antd/dist/antd.css';
import './NewAdvertPage.css';

import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Button,
  
} from 'antd';

export const searchedAdvert = ''
const { Option } = Select;



const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};




export class Search extends React.Component {
    state = {
        advert: { name:'', price:'100000', tags:'' ,sale: false, photo:''},
        error: null,
        createdAdvertId: null,
        

      };
   

  handleChange = event => {
    this.setState(state => ({
      advert: { ...state.advert, [event.target.name]: event.target.value },
    }));
  };
    

    handleSubmit = async ev => {
        const { advert } = this.state;
        
        //ev.preventDefault();
        try {
            
        
          console.log(advert.name)
          const searchedAdvert = await searchAdvert(advert)
          console.log(searchedAdvert)
          console.log(this.props.callback(searchedAdvert))
          
          return this.props.callback(searchedAdvert)
        
          
          
          
          //this.setState({ createdAdvertId: createdAdvert.result._id });
        } catch (error) {
          this.setState({ error });
        }
      };
    
    
    /*componentDidMount() {
      //this.textAreaRef.current.focus();
    }*/
    async componentDidMount() {
        console.log(searchedAdvert)
      if (searchedAdvert){
        this.setState({ adverts: searchedAdvert.rows });
  
      }}
    
    
  render() {
    const {
        advert: { name , price, tags, sale},
        createdAdvertId,
      } = this.state;
    


    
  
  
    return (
        <div title="Search Advert">
          <div
            className="Search bordered"
            style={{ borderBottomWidth: 10 }}
          >
            
            <div className="right">
              <Form {...formItemLayout}  onFinish={this.handleSubmit}>
               <Form.Item label="name">
                  <Input name="name" value={name} onChange={this.handleChange}/>
               </Form.Item>
               <Form.Item label="price lower than">
                 <InputNumber name ="price"  value= {price} onChange={( value ) => this.handleChange({ target: {value, name: 'price'}})}/>
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
                <p>Good to go?...then SUBMIT here!</p>
                
                  
                <Form.Item
                  wrapperCol={{
                  span: 12,
                  offset: 6,
                  }}
                >
                  <Button type="primary" htmlType="submit" >
                  Search
                 </Button>
                </Form.Item>
                
                 
            
              </Form>
              
            </div>
          </div>
        </div>
      );
   
  }
}

//export default Search;
