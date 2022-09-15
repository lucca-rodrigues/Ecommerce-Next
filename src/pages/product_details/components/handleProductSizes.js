import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ProductColor } from "../../../components/ProductColor";
import { ProductSize } from "../../../components/ProductSize";

export function HandleProductSizes({ productDetails }) {
  return (
    <>
      {productDetails?.size && (
        <>
          <Stack>
            <Typography>TAMANHO</Typography>
          </Stack>
          <Stack direction="row">
            {productDetails?.size?.map((item, index) => (
              <ProductSize key={index} size={item?.size} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
}
