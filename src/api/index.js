async function getProducts(req, res) {
  if (req.method === "GET") {
    const data = await import("./products.json");
    return res.status(200).send(data);
  }

  return res.status(404).send({ message: "Api route not found" });
}

async function getProductStock(req, res) {
  if (req.method === "GET") {
    const data = await import("./products_stock.json");
    return res.status(200).send(data);
  }

  return res.status(404).send({ message: "Api route not found" });
}

export { getProducts, getProductStock };
