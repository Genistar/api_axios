import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';
//hiển thị danh sách sp
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products','GET',null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
//Xóa 
export const actDeleteProductRequest = (id) =>{
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCTS,
        id
    }
}
//thêm
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products','POST',product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCTS,
        product
    }
}
//hiểm thị lên ô input
export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'GET',null).then(res => {
            dispatch(actEditProduct(res.data))
        })
    }
}

export const actEditProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCTS,
        product
    }
}
//sửa
export const actUpdateProductRequest = (product) =>{
    return (dispatch) => {
        return callApi(`products/${product.id}`,'PUT',product).then(res => {
            dispatch(actEditProduct(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return{
        type : Types.UPDATE_PRODUCTS,
        product
    }
}