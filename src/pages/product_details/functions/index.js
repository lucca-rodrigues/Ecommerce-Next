export function getProductDetails(ProductList, productId) {
  return ProductList.filter((item) => item["id"] === productId);
}
export function getProductImages(ProductImages, productId) {
  return ProductImages.filter((item) => item["id"] === productId);
}

export function getProductStock(ProductStock, productId) {
  return ProductStock?.filter((item) => item["id"] === productId);
}
