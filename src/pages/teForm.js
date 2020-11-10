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

  let clearStats = () => {
    setHistory([]);
    setScore({ correct: 0, incorrect: 0 });
  };

  return (
    <Flex flexDirection="column" alignItems="center" paddingTop="1rem">
      <Flex flexDirection="row" width="30rem" justifyContent="space-evenly">
        <Button onClick={() => setShowStats(!showStats)} marginBottom="1rem">
          Toggle Stats
        </Button>
        <Button onClick={() => clearStats()}>Clear Stats</Button>
      </Flex>
      <TeFormApp score={[score, setScore]} history={[history, setHistory]} />
      <Collapse isOpen={history.length > 0}>
        <PreviousAnswer history={[history, setHistory]} />
      </Collapse>
      <Collapse isOpen={showStats} marginTop="1rem">
        <Statistics score={[score, setScore]} history={[history, setHistory]} />
      </Collapse>
    </Flex>
  );
}
