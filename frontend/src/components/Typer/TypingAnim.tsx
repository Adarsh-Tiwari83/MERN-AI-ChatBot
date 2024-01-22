import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                'Chat With Your Own AI',
                1000,
                'Bulid With OpenAI',
                2000,
                'Your Own Customized ChatGPT',
                1500,
            ]}
            speed={50}
            style={{ fontSize: '50px', color:"white", display:"inline-block", textShadow:"1px 1px 20px #000"}}
            repeat={Infinity}
        />
    )
}

export default TypingAnim
