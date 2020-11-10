import { Box, Heading } from "@chakra-ui/core";
import AnswerAnalysis from "./answerAnalysis";

export default function PreviousAnswer(props) {
  let [history, setHistory] = props.history;

  let calculateBoxShadow = () => {
    if (history.length <= 0) {
      return;
    }
    if (history[history.length - 1].result === "correct") {
      return "0px 0px 12px #5ad13d";
    }
    return "0px 0px 12px #a83232";
  };

  return (
    <Box
      borderWidth="px"
      borderRadius="8px"
      width="45rem"
      padding="2rem"
      marginBottom="1rem"
      boxShadow={calculateBoxShadow()}
    >
      <Heading>Previous Answer Summary</Heading>
      {history.length > 0 && <AnswerAnalysis history={history} />}
    </Box>
  );
}
