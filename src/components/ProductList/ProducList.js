import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                  </div>
                  <div className="panel-body">
                    
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.children}
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
        );
    }
}

export default ProductList
