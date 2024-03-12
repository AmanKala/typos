import useTypewriter from "../CustomHooks/useTypewriter";

const Typewriter = ({ text, speed, componentClasses }) => {
    const { displayText, showCursor } = useTypewriter(text, speed);
    return (
        <div className={componentClasses}>
        <i className="fa fa-keyboard-o text-warning"></i> &nbsp;
        {displayText}
        {showCursor && '|'} 
        </div>
    );
};
  
export default Typewriter;
