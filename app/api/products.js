
import axios from "axios";

export const getAllProducts = async () => {
    const res = axios.get(`https://blue-angry-gorilla.cyclic.app/products`);
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
    formData.append('product_price', productData.product_price);
    formData.append('category_name', productData.category); 
    formData.append('vendor_ids', productData.shop); 
    formData.append('product_image', productData.product_image);

  productData.specifications.forEach((specification, index) => {
    formData.append(`specifications[${index}][key]`, specification.key ? specification.key : '-');
    formData.append(`specifications[${index}][value]`, specification.value ? specification.value: '-');
});
    const res = await fetch(`/products/add`, {
        method: 'POST',
        body: formData,
    });

    return await res.json();
};

export const deleteProduct = async (id) => {
    const res = await fetch(`/products/${id}`, {
        method: 'DELETE',
    });

    return await res.json();
};
