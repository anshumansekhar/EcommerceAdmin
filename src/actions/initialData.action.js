import {
  categoryConstansts,
  productConstants,
  orderConstants,
  notificationContants
} from "./constants";
import axiosIntance from "../helpers/axios";

export const delNotification = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: notificationContants.DEL_NOTIFICATIONS_REQUEST });
      const res = await axiosIntance.post(`/deleteNotification`,{
        data:id
      });
      if (res.status === 200) {
        dispatch({ type: notificationContants.DEL_NOTIFICATIONS_SUCCESS });
        dispatch(getAllNotifications("test"));
      } else {
        dispatch({ type: notificationContants.DEL_NOTIFICATIONS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllNotifications = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: notificationContants.GET_NOTIFICATIONS_REQUEST });
      const res = await axiosIntance.get(`/getAllNotifications`,{
        data:id
      });
      if (res.status === 200) {
        dispatch({ type: notificationContants.GET_NOTIFICATIONS_SUCCESS });
      } else {
        dispatch({ type: notificationContants.GET_NOTIFICATIONS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axiosIntance.post(`/initialData`);
    if (res.status === 200) {
      const { notifications,categories, products, orders } = res.data;
      dispatch({
        type:notificationContants.GET_NOTIFICATIONS_SUCCESS,
        payload:{notifications}
      })
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
        payload: { orders },
      });
    }
  };
};
