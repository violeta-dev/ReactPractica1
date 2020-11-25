import React from 'react';
import {Image, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import placeholder from '../../assets/default_profile.png'

import style from './InputImage.module.css'

class InputImage extends React.Component {
    state ={
        src: placeholder

    }
    inputRef = React.createRef(null)
    readFile = file => {
        const {onChange} =this.props;
        const setSrc = src =>
        this.setState({src}, () => {
            if (onChange) onChange(file);
        })
        if(!file){
            setSrc(placeholder)

        }else {
            const render = new FileReader()
            render.onload = function() {
              setSrc(reader.result)
            }
            reader.readAsDataURL(file)
        }
        
    }
    handleUploadClick = () => {
        const {src} =this.state
        const {currrent: fileInput} = this.inputRef
        if (src == placeholder) {
            fileInput.click()
        }
    }

    handleDeleteClick = () => {
        const {currrent: fileInput} = this.inputRef
        fileInput.value =null
        this.readFile(null)
        
    }

    handleChange = ev => {
        const[file] = ev.target.files
        this.readFile(file)
        
    }
    render() {
       const {onChange, ...props} =this.props;
       const {src} =this.state
       const isSRCLoaded = src =! placeholder
       return (
           <React.Fragment>
               
           </React.Fragment>
       )
    }
}
