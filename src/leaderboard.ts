import { Connection } from "@solana/web3.js";
import { SDK } from "@solworks/sujiko-sdk";

(async () => {
    const conn = new Connection("");
    const sdk = SDK.buildWithNoWallet({ connection: conn });
    const leaderboard = await sdk.getLeaderboard({ limit: 100, offset: 0 });
    console.log(leaderboard);
})()