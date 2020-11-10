import { useState } from "react";
import { Button, Collapse, Flex } from "@chakra-ui/core";
import Statistics from "../components/statistics";
import TeFormApp from "../components/teFormApp";
import PreviousAnswer from "../components/previousAnswer";

export default function TeForm() {
  let [showStats, setShowStats] = useState(true);
  let [score, setScore] = useState({ correct: 0, incorrect: 0 });
  // {question, answer, result}
  let [history, setHistory] = useState([]);
  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="1rem">
      <Button onClick={() => setShowStats(!showStats)} marginBottom="1rem">
        Toggle Stats
      </Button>
      <TeFormApp score={[score, setScore]} history={[history, setHistory]} />
      <PreviousAnswer history={[history, setHistory]} />
      <Collapse isOpen={showStats} marginTop="1rem">
        <Statistics score={[score, setScore]} history={[history, setHistory]} />
      </Collapse>
    </Flex>
  );
}
