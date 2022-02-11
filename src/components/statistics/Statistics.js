
import { 

Stats
    
    
} from "./Statistics.styled";

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
<div>

                <div className="Wrap">
                    <Stats>
                <li>Good: {good} </li>
                <li>Neutral: {neutral} </li>
                <li>Bad: {bad} </li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
                    </Stats>
        </div>
        </div>

};

