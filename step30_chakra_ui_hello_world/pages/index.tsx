import { VStack, Button } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack>
      <Button backgroundColor="brand.100">brand.100</Button>
      <Button backgroundColor="brand.200">brand.200</Button>
      <Button backgroundColor="brand.300">brand.300</Button>
      <Button backgroundColor="brand.400">brand.400</Button>
    </VStack>
  );
};

export default Home;
