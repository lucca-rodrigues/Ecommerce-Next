import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Placeholder } from "../../assets";

import { Container } from "./styles";

export function ProductImagesBox({ images }) {
  const [selectedImage, setSelectedImage] = useState(Placeholder);
  // const firstImage = ["images"][0]["path"]["src"];

  // const firstImage = null;

  // useMemo(() => {
  //   if (firstImage) setSelectedImage(firstImage);
  // }, [firstImage]);

  // console.log(firstImage);
  return (
    <Container>
      <Stack>
        <Box>
          <Image src={selectedImage} alt="" width={500} height={500} />
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        <Box>
          <Image src={selectedImage} alt="" width={100} height={100} />
        </Box>
        <Box>
          <Image src={selectedImage} alt="" width={100} height={100} />
        </Box>
        <Box>
          <Image src={selectedImage} alt="" width={100} height={100} />
        </Box>
        <Box>
          <Image src={selectedImage} alt="" width={100} height={100} />
        </Box>
      </Stack>
    </Container>
  );
}
