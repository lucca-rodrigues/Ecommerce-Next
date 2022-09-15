import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Placeholder } from "../../assets";

import { Container } from "./styles";

export function ProductImagesBox({ images }) {
  const [selectedImage, setSelectedImage] = useState(Placeholder);
  const [galleryImages, setGalleryImages] = useState([]);
  const firstImage = images?.[0]?.["path"]?.["src"];

  useMemo(() => {
    if (images && firstImage) setSelectedImage(firstImage);
  }, [firstImage, images]);

  useEffect(() => {
    if (images) {
      setGalleryImages(images);
    }
  }, [galleryImages, images]);

  return (
    <Container>
      <Stack>
        <Box>
          <Image src={selectedImage} alt="" width={500} height={500} />
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        {galleryImages?.map((item, index) => (
          <Box key={index} onClick={() => setSelectedImage(item.path.src)}>
            <Image src={item.path.src} alt="" width={100} height={100} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
