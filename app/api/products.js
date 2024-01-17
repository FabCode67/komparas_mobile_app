
import axios from "axios";

export const getAllProducts = async () => {
    const res = axios.get(`https://blue-angry-gorilla.cyclic.app/native/products`);
    console.log(res);
    return await res;
}

export const getPoductByCategory = async (category) => {
    const res = axios.get(`/products/category/${category}`);
    return await res;
}

export const getPoductById = async (id) => {
    const res = axios.get(`/products/images/${id}`);
    return await res;
}

export const getProductOnCategory = async (category) => {
    const res = axios.get(`/products/category/${category}`);
    return await res;
}

export const getProductOnSearch = async (search) => {
    const res = axios.get(`/products/search/${search}`);
    return await res;
}

export const addProduct = async (productData) => {
    const formData = new FormData();
    formData.append('product_name', productData.product_name);
    formData.append('product_description', productData.product_description);
    formData.append('product_image', productData.product_image);
    formData.append('product_price', productData.product_price);
    formData.append('product_quantity', productData.product_quantity);
    formData.append('product_category', productData.product_category);
    formData.append('product_image', {
      uri: productData.product_image,
      type: 'image/jpeg',
      name: 'product_image.jpg',
    });
    const res = await fetch("https://blue-angry-gorilla.cyclic.app/products/add", {
      method: 'POST',
      body: formData,
    });
    console.log(res);
    return  res
  };
export const deleteProduct = async (id) => {
    const res = await fetch(`/products/${id}`, {
        method: 'DELETE',
    });

    return await res.json();
};
