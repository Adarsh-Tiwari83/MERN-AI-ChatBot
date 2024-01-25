// import { Configuration } from "openai";
// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: process.env.OPEN_AI_SECRET,
//     organization: process.env.OPENAI_ORAGANIZATION_ID,
//   });
//   return config;
// };
import { OpenAI } from 'openai';
const openai = new OpenAI({
    apiKey: process.env[process.env.OPEN_AI_SECRET], // This is the default and can be omitted
});
async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });
}
main();
//# sourceMappingURL=openai-config.js.map