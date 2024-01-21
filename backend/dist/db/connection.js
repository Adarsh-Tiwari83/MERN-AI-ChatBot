import { connect, disconnect } from "mongoose";
async function ConnectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to database.");
    }
}
async function DisConnectToDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error.message);
        throw new Error("Cannot connect to database.");
    }
}
export { ConnectToDatabase, DisConnectToDatabase };
//# sourceMappingURL=connection.js.map