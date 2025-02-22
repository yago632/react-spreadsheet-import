import { Box } from "@chakra-ui/react"
import React from "react"

export const FadingOverlay = () => (
  <Box
    position="absolute"
    left={0}
    right={0}
    bottom={0}
    height="48px"
    pointerEvents="none"
    bgGradient="linear(transparent, background)"
  />
)
