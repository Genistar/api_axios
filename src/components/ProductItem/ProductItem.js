import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm("Bạn có muốn xóa săn phẩm này không ?")){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-lg btn-success mb-10 mr-10">Sửa</Link>
                    <button type="button" className="btn btn-lg btn-danger mb-10" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem
