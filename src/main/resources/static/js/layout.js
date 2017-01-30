import React from 'react';

import Nav from './layout/nav';
import SidebarLeft from './layout/sidebar-left';

export default class Layout extends React.Component{

    constructor(){
        super();
        this.state = {
            toggleLeft: true
        };
        this.toggleSidebarLeft = this.toggleSidebarLeft.bind(this);
    }

    toggleSidebarLeft(toggleLeft){
        //close right sidebar if toggled
        if (this.state.toggleRight){
            this.setState({toggleRight: false})
        }
        this.setState({toggleLeft});
    }

    render(){
        const toggleClass = this.state.toggleLeft ? "toggle-left" : "";
        console.log(this.props);

        return(
            <div id="wrapper" className={toggleClass}>
                <SidebarLeft toggleLeft={this.state.toggleLeft}
                             toggleSidebarLeft={this.toggleSidebarLeft} />
                <Nav location={this.props.location} />
                {this.props.children}
            </div>
        );
    }
}