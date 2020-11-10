import { useEffect, useState } from "react";
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

export default function Statistics(props) {
  let [score, setScore] = props.score;
  let [history, setHistory] = props.history;
  let [scorePercentage, setScorePercentage] = useState();
  let [netChange, setNetChange] = useState();
  let [currentStreak, setCurrentStreak] = useState();
  let [bestStreak, setBestStreak] = useState(0);

  // messy fix later
  useEffect(() => {
    if (score.correct === 0 && score.incorrect === 0) {
      setScorePercentage("N/A");
      setNetChange("N/A");
      setCurrentStreak("N/A");
      return;
    }
    let total = score.incorrect + score.correct;
    setScorePercentage(((score.correct / total) * 100).toFixed(4));
    setNetChange(calculateNetChange());
    setCurrentStreak(calculateCurrentStreak());
    // I might fix later
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  let calculateNetChange = () => {
    if (history.length === 0) {
      return "N/A";
    }
    // get current score
    let currentScore = calculateCurrentScore(history);
    // get all results but last 10
    if (history.length < 5) {
      return currentScore;
    }
    let pastScore = calculateCurrentScore(
      history.splice(0, history.length - 5)
    );
    return currentScore - pastScore;
  };

  let calculateCurrentStreak = () => {
    if (history.length === 0) {
      return 0;
    }
    let current = history.length - 1;
    let streak = 0;
    while (current >= 0 && history[current].result !== "incorrect") {
      streak++;
      current--;
    }
    if (streak > bestStreak) {
      setBestStreak(streak);
    }
    return streak;
  };

  let calculateCurrentScore = (historyArr) => {
    if (historyArr.length === 0) {
      return 0;
    }

    let numberCorrect = historyArr.reduce((acc, cur) => {
      if (cur.result === "correct") {
        return acc + 1;
      }
      return acc;
    }, 0);
    return ((numberCorrect / historyArr.length) * 100).toFixed(4);
  };

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
          <StatNumber>{currentStreak}</StatNumber>
          {/* maybe later */}
          {/* <StatHelpText>
            <StatArrow type="increase" />
            5% from last best
          </StatHelpText> */}
        </Stat>

        <Stat>
          <StatLabel>Percentage Correct</StatLabel>
          <StatNumber>{scorePercentage}%</StatNumber>
          <StatHelpText>
            <StatArrow type={netChange < 0 ? "decrease" : "increase"} />
            {netChange}%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
