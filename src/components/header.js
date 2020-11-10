import {
  Flex,
  Icon,
  Text,
  useColorMode,
  Link as UILink,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="box"
      justifyContent="center"
      padding="1.5rem"
      borderBottom="1px"
      borderColor="grey"
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
        <UILink onClick={() => toggleColorMode()}>
          <Icon name="moon" size="24px" />
        </UILink>
      </Flex>
    </Flex>
  );
}
