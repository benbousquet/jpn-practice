import { useState } from "react";
import { Flex } from "@chakra-ui/core";
import Statistics from "../components/statistics";
import TeFormApp from "../components/teFormApp";

export default function TeForm() {
  let [score, setScore] = useState({ correct: 0, incorrect: 0 });
  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="1rem">
      <Statistics />
      <TeFormApp score={[score, setScore]} />
    </Flex>
  );
}
