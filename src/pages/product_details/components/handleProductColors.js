import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ProductColor } from "../../../components/ProductColor";

export function HandleProductColors({ productDetails }) {
  return (
    <>
      {productDetails?.color && (
        <>
          <Stack>
            <Typography>COR</Typography>
          </Stack>
          <Stack direction="row">
            {productDetails?.color?.map((item) => (
              <ProductColor key={item} color={item} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
}
