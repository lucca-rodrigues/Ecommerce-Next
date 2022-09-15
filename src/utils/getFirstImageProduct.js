import { ProductImages } from "../api/product_images";

export function getFirstImageProduct(productId) {
  const product = ProductImages.filter((item) => item["id"] === productId);
  const image = product[0]["images"][0]["path"]["src"] ?? "";

  return image;
}
