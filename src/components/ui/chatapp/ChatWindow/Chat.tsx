import { FC } from "react";
import Answer from "./Answer";
import Question from "./Question";

interface ChatProps {
    chat: any
}

const Chat:FC<ChatProps> = ({chat}) => {
    return (
        <div className="w-[80%] flex flex-col">
            <Question ques={chat.question}/>
            <Answer ans={chat.answer}/>
        </div>
    )
}

export default Chat;