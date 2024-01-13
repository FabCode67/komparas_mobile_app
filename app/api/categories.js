export const getAllCategories = async () => {
    const res = await fetch(`https://blue-angry-gorilla.cyclic.app/categories/all`);
    return await res.json();
}
