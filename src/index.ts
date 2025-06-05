import type {ActivityEvent} from "./userEvents"
import { getActivityList } from "./userEvents";

async function main() {
    const ghUser = Bun.argv[2];

    try {
        const events: Response = await Bun.fetch(`https://api.github.com/users/${ghUser}/events`)
        if(events.status == 404){
            throw new Error("404 Not Found");
        }
        if(events.status == 403){
            throw new Error("403 Forbidden");
        }
        if(events.status == 503){
            throw new Error("Service unavailable");
        }
        const json = await events.json();
        const eventJson = json as Array<ActivityEvent>;
        
        eventJson.forEach(event => {
            console.log(getActivityList(event))
        });
    } catch(e) {
        console.error("Failed to read Github Account\n " + e)
    }
}

main();
