import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/core";

export default function AnswerAnalysis(props) {
  let history = props.history;

  let getConjugationExplaination = (verb) => {
    switch (verb) {
      case "ru":
        return "For 'ru' verbs simply just take off the る and add a て";
      case "u":
        return "For 'u' verbs there are two seperate conjugations, IF it ends with a う, つ or る, replace the respective ending with a って. IF it ends with a む, ぶ or ぬ, replace the respective ending with a んで";
      case "irregular":
        return "You need to know how each one conjugates individualy";
      default:
        break;
    }
  };

  let getConjugationExamples = (verb) => {
    switch (verb) {
      case "ru":
        return "たべる　→　たべて";
      case "u":
        return "あう　→　あって  and  よむ　→　よんで";
      case "irregular":
        return "する　→　して  and  くる　→　きて";
      default:
        break;
    }
  };

  let analysis = (dataPoint) => {
    // if(dataPoint.)
    let analysisText = `You answered '${dataPoint.answer}', however the correct answer was ${dataPoint.currentQuestion.te} which is a '${dataPoint.currentQuestion.type}' verb`;

    return (
      <Box>
        {analysisText}
        <Text>
          If you forget how to conjugate '{dataPoint.currentQuestion.type}'
          verbs then click on Hint
        </Text>
        <Popover>
          <PopoverTrigger>
            <Button>Hint</Button>
          </PopoverTrigger>
          <PopoverContent zIndex={4}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              '{dataPoint.currentQuestion.type}' verb conjugation
            </PopoverHeader>
            <PopoverBody>
              {getConjugationExplaination(dataPoint.currentQuestion.type)}
            </PopoverBody>
            <PopoverFooter>
              {getConjugationExamples(dataPoint.currentQuestion.type)}
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Box>
    );
  };

  return (
    <Box>
      <Text>
        Your previous answer was{" "}
        {history[history.length - 1].result === "correct"
          ? "correct, nice job!"
          : "incorrect, lets see what you did wrong."}
      </Text>

      {analysis(history[history.length - 1])}
    </Box>
  );
}
