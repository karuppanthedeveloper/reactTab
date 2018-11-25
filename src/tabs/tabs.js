import React, {Component} from 'react';
import Tab from './tab';
import './style.css';
class Tabs extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab : this.props.children[0].props.label
        }
    };
    onClickTabItem = (tab)=>{
        this.setState({
            activeTab:tab
        });
    }
    render(){
        const{
            props:{
                children
            },
            state:{
                activeTab
            },
            onClickTabItem
        }=this;
        return(
            <div className="tabs">
                <ol className="tab-list">
                    {
                        children.map((child)=>{
                            const {label} = child.props;
                            return(
                                <Tab
                                    label={label}
                                    key={label}
                                    activeTab={activeTab}
                                    onClick={onClickTabItem}
                                />
                            )
                        }

                        )
                    }
                </ol>
                <div className="tab-content">
                        {
                            children.map((child)=>{
                                if(child.props.label!==activeTab)return undefined;
                                return child.props.children;
                            })
                        }
                </div>
            </div>

        )
    }


};
export default Tabs;