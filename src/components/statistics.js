import {
  Box,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/core";

export default function Statistics() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="8px"
      width="45rem"
      padding="2rem"
      marginBottom="1rem"
    >
      <Heading>Statistics</Heading>
      <StatGroup paddingTop="2rem">
        <Stat>
          <StatLabel>Current Streak</StatLabel>
          <StatNumber>5</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5% from last best
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Percentage Correct</StatLabel>
          <StatNumber>45%</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
