import React, { Component } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
const menus = [
    {
        path : '/',
        label : 'Trang Chủ',
        exact : true
    },
    {
        path : '/product-list',
        label : 'Danh sách sản phẩm',
        exact : false
    }
];
function Customlink({label,to,activeOnlyWhenExact}){
    let match = useRouteMatch({
        path: to,
        exact : activeOnlyWhenExact
    })
    return(
        <li className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </li>
    );
}
const arrLink = menus.map((menu,index) => {
    return(
        <Customlink key={index} to={menu.path} label={menu.label} activeOnlyWhenExact={menu.exact}/>
    )
})
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <a className="navbar-brand" >API</a>
                <ul className="nav navbar-nav">
                    {arrLink}
                </ul>
            </nav>
        );
    }
}

export default Menu
