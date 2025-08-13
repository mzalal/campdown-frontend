import Input from "../Input/Input.jsx";
import Icon from "../Icon/Icon.jsx";
import classes from "./Chat.module.css";

function Chat() {
    return (
        <div className={classes.chatContainer}>
            <div className={classes.chatBox}>
                <div className={classes.chatMessages}>
                    <div className={classes.messageContainer}>
                        <span className={classes.username}>username:</span>
                        <span className={classes.message}>
                            lorem ipsum dolor sit seta meta trank opos mika lark tank
                            weta.
                        </span>
                    </div>
                    <div className={classes.messageContainer}>
                        <span className={classes.username}>username:</span>
                        <span className={classes.message}>
                            lorem ipsum dolor sit seta meta trank opos mika lark tank
                            weta.
                        </span>
                    </div>
                </div>
                <div className={classes.chatInput}>
                    <Input placeholder="Chat message" />
                    <button>
                        <Icon name="send" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
