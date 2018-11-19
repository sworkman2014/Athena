// React Import
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Materialize Imports
import { SideNav, SideNavItem, Footer } from 'react-materialize';

// React Icons Imports
import { GoMarkGithub } from "react-icons/go";

// CSS Imports
import "./MainNav.css";

class MainNav extends React.Component {
	
	render() {
		return (
			<div className=''>
                <SideNav
                trigger={<div data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></div>}
                fixed={true}
                className="mainNav-bg"
                >
                	<h3>{this.props.organization.name}</h3>
                    <SideNavItem
                        userView 
                        id='userProfile'
                        user={{
	                        background: '',
	                        image: '',
	                        name: <span className='blk'>{this.props.user.fname.toUpperCase()} {this.props.user.lname.toUpperCase()}</span>,
	                        email: <span className='blk'>{this.props.user.username}</span>
                        }}
                    />
                    
                    <SideNavItem divider />
                    
                    <SideNavItem subheader className="mainNav-header">Administration</SideNavItem>
                    
                    <Link className='no-padding' to={`/${this.props.organization.name.replace(' ', '')}/dashboard`}>
                    	<SideNavItem  component={Link} icon='developer_board'>Dashboard</SideNavItem>
                    </Link>
                    <Link className='no-padding' to={`/${this.props.organization.name.replace(' ', '')}/trainings`}>
                    	<SideNavItem icon='event'>Trainings</SideNavItem>
                    </Link>
					<Link className='no-padding' to={`/${this.props.organization.name.replace(' ', '')}/employees`}>
						<SideNavItem href='#!second' icon='face'>Employees</SideNavItem>
					</Link>
					<Link className='no-padding' to={`/${this.props.organization.name.replace(' ', '')}/network`}>
						<SideNavItem href='#!second' icon='network_cell'>Network</SideNavItem>
					</Link>
					
                    <SideNavItem divider />
                    <SideNavItem subheader className="mainNav-header">User</SideNavItem>
                    <SideNavItem href='#!icon' icon='dashboard'>My Dashboard</SideNavItem>
                    <SideNavItem href='#!second' icon='event_note'>My Trainings</SideNavItem>
                    <SideNavItem href='#!second' icon='folder'>My Documents</SideNavItem>
                    <SideNavItem href='#!second' icon='people'>Contacts</SideNavItem> 
                    <SideNavItem divider />
                    <Footer
                    copyrights= "Athena"
                    className="mainNav-footer">Athena <GoMarkGithub /> </Footer>
               </SideNav>
            </div>
		);
	}
}

export default MainNav;