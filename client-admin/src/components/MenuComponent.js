import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <ul className="menu">
          <li className="menu"><Link to='/admin/home'>Trang chủ</Link></li>
          <li className="menu"><Link to='/admin/category'>Danh mục</Link></li>
          <li className="menu"><Link to='/admin/product'>Sản phẩm</Link></li>
          <li className="menu"><Link to='/admin/order'>Đơn hàng</Link></li>
          <li className="menu"><Link to='/admin/customer'>Khách hàng</Link></li>
        </ul>
      </div>
      <div className="float-right">
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;