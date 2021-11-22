import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../actions';
import {connect} from 'react-redux'
import itemEdit from '../../reducers/itemEdit';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : false
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {id,txtName , txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        }
        if (id) {
            //update
            // callApi(`products/${id}`,'PUT',{
            //     name : txtName,
            //     price : txtPrice,
            //     status : chkbStatus
            // }).then(res => {
            //     history.goBack();// trở về trang quản lý sản phẩm
            // })
            this.props.updateProduct(product);
            history.goBack();
        }
        else{
            // //add
            // callApi('products','POST',{
            //     name : txtName,
            //     price : txtPrice,
            //     status : chkbStatus
            // }).then(res => {
            //     history.goBack();// trở về trang quản lý sản phẩm
            // })
            this.props.adđProduct(product);
            history.goBack()
        }
    }
    componentDidMount(){
        var {match} = this.props;
        if(match) {
            var id = match.params.id
            // callApi(`products/${id}`,'GET',null).then(res => {
            //     var data = res.data;
            //     this.setState({
            //         id : data.id,
            //         txtName : data.name,
            //         txtPrice : data.price,
            //         chkbStatus : data.status
            //     })
            // })
            this.props.actEdit(id)
        }
    }
    //Khi cwm được gọi thì nó sẽ dispatch cái action và lưu itemEditting vào store sau đó từ store ta lấy state để chuyển thành props cho cwrp
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            })
        }
    }
    render() {
        var {txtName , txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <div className="row">

                  <form onSubmit={this.onSave}>
                      <legend>Form title</legend>
                      <div className="form-group">
                          <label>Tên sản Phẩm</label>
                          <input 
                            type="text" 
                            className="form-control"
                            name = "txtName"
                            value = {txtName}
                            onChange = {this.onChange}
                            />
                      </div>
                      <div className="form-group">
                          <label>Giá :</label>
                          <input 
                            type="number" 
                            className="form-control"
                            name = "txtPrice"
                            value = {txtPrice}
                            onChange = {this.onChange}
                            />
                      </div>
                      <div className="form-group">
                          <label>Trạng Thái :</label>
                          
                          <div className="checkbox">
                              <label>
                                  <input 
                                    type="checkbox"
                                    name="chkbStatus"
                                    value={chkbStatus}
                                    onChange = {this.onChange}
                                    checked = {chkbStatus}
                                    />
                                  Còn Hàng
                              </label>
                          </div>
                          
                      </div>
                        <Link to="/product-list" className="btn btn-danger mr-10">Back</Link>
                        <button type="submit" className="btn btn-primary">Save</button>
                        
                  </form>
                  
              </div>
              
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing : state.itemEdit 
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        adđProduct : (product) => {
            dispatch(actAddProductRequest(product))
        },
        actEdit : (id) => {
            dispatch(actEditProductRequest(id))
        },
        updateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage)
