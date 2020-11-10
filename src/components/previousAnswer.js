import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import AnswerAnalysis from "./answerAnalysis";

export default function PreviousAnswer(props) {
  let [history, setHistory] = props.history;
  let [correct, setCorrect] = useState(false);

  useEffect(() => {}, [history]);

  return (
    <Box
      borderWidth="1px"
      borderRadius="8px"
      width="45rem"
      padding="2rem"
      marginBottom="1rem"
    >
      <Heading>Previous Answer Summary</Heading>
      {history.length > 0 && <AnswerAnalysis history={history} />}
    </Box>
  );
}
