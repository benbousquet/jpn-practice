import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/core";
import Statistics from "../components/statistics";

export default function TeForm() {
  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="1rem">
      <Statistics />
      <Flex
        borderWidth="1px"
        borderRadius="8px"
        width="45rem"
        padding="1rem"
        flexDirection="column"
        alignItems="center"
      >
        <Heading textAlign="center">Te Form Practice</Heading>
        <Box borderWidth="1px" shadow="md" padding="1rem 2rem" margin="1rem">
          <Text>This is a test</Text>
        </Box>
        <Flex flexDirection="row" width="30rem" justifyContent="space-evenly">
          <Input placeholder="answer" width="15rem" />
          <Button>Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
