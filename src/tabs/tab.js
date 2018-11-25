import React, { Component } from 'react';
class Tab extends Component{
    onClickTab=(props)=>{
        const{label,onClick} =this.props;
        onClick(label);
    }
    render(){
        const{
            onClickTab,
            props:{
                activeTab,
                label
            }
        }=this;
        let className="tab-list-item";
        if(activeTab===label) className +=" tab-list-active"
        return(
            <li className={className} onClick={onClickTab}>
            {label}
            </li>
        )
    }
};
export default Tab;