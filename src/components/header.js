import { Box, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      as="box"
      justifyContent="center"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        flexDirection="row"
        width="20rem"
      >
        <Text>
          <Link to="/">Home</Link>
        </Text>
        <Text>
          <Link to="/teform">Te Form Practice</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
