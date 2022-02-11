
import PropTypes from "prop-types";
import { 
    Wrap,
    Button,
    Item
    
} from "./feedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrap>
         {options.map(option => {
        return (
          <Item
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            <Button>{option}</Button>
          </Item>
        );
      })}

       </Wrap>
   ) 
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
    export default FeedbackOptions;
