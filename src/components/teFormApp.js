import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/core";
import questionBank from "../data/teFormQuestionBank";

export default function TeFormApp(props) {
  let [score, setScore] = props.score;
  let [history, setHistory] = props.history;
  // {type, dict, te}
  let [currentQuestion, setCurrentQuestion] = useState({});
  let [answer, setAnswer] = useState("");

  let handleChange = (e) => {
    setAnswer(e.target.value);
  };

  let handleKeyPress = (e) => {
    if (e.key === "Enter") {
      checkAnswer(e);
    }
  };

  let generateQuestion = () => {
    const categoryIndex = Math.floor(Math.random() * Math.floor(3));
    const categories = ["ru", "u", "irregular"];
    const category = categories[categoryIndex];
    const questionIndex = Math.floor(
      Math.random() * Math.floor(questionBank[category].length)
    );
    setCurrentQuestion({
      ...questionBank[category][questionIndex],
      type: category,
    });
  };

  let checkAnswer = (e) => {
    if (currentQuestion.te === answer) {
      setScore({ correct: score.correct + 1, incorrect: score.incorrect });
      let newHistory = [...history];
      newHistory.push({
        currentQuestion,
        answer,
        result: "correct",
      });
      setHistory(newHistory);
    } else {
      setScore({ correct: score.correct, incorrect: score.incorrect + 1 });
      let newHistory = [...history];
      newHistory.push({
        currentQuestion: currentQuestion,
        answer: answer,
        result: "incorrect",
      });
      setHistory(newHistory);
    }
    generateQuestion();
    setAnswer("");
  };

  // componentDidMount-ish?
  useEffect(() => {
    // generate initial question
    generateQuestion();
  }, []);

  return (
    <Flex
      marginBottom="2rem"
      borderWidth="1px"
      borderRadius="8px"
      width="45rem"
      padding="1rem"
      flexDirection="column"
      alignItems="center"
    >
      <Heading textAlign="center">Te Form Practice</Heading>
      <Box borderWidth="1px" shadow="md" padding="1rem 2rem" margin="1rem">
        <Text>{currentQuestion.dict}</Text>
      </Box>
      <Flex flexDirection="row" width="30rem" justifyContent="space-evenly">
        <Input
          placeholder="answer"
          width="15rem"
          value={answer}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={checkAnswer}>Submit</Button>
      </Flex>
    </Flex>
  );
}
