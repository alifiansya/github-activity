export interface ActivityEvent {
    id: string,
    type: string,
    actor: object,
    repo: {id: number, name: string, url: string},
    payload: any, // Different based on the activity type
    public: boolean,
    created_at: string
}

export function getActivityList(event: ActivityEvent) : string {
    const eventTime = `(${event.created_at}) `;
    let message = "";
    switch (event.type) {
        case "PushEvent":
            const commitCount = event.payload.commits.length;
            message = `Pushed ${commitCount} commit${commitCount > 1 ? `s` : ``} to ${event.repo.name}`
            break;
        case "IssuesEvent":
            message = `${event.payload.action} an issue in ${event.repo.name}`
            break;
        case "IssueCommentEvent":
            message = `${event.payload.action} a comment of an issue in ${event.repo.name}`
            break;
        case "PullRequestEvent":
            message = `${event.payload.action} a pull request in ${event.repo.name}`
            break;
        case "CreateEvent":
            const createdType = event.payload.ref_type;
            if(createdType == "repository") {
                message = `Created ${event.repo.name}`
            }
            else{
                message = `Created a ${createdType + ` ` + event.payload.ref} in ${event.repo.name}`
            }
            break;
        case "DeleteEvent":
            message = `Deleted ${event.payload.ref_type + ` ` + event.payload.ref} a pull request in ${event.repo.name}`
            break;
        case "ForkEvent":
            message = `Forked ${event.payload.forkee.full_name} repository to ${event.repo.name}`
            break;
        case "GollumEvent":
            event.payload.pages.forEach(page => {
                message += `${page.action} ${page.page_name},`
            });
            message += `in ${event.repo.name}`;
            break;
        case "CommitCommentEvent":
            message = `${event.payload.action} a comment in ${event.repo.name}`
            break;
        case "PublicEvent":
            message = `Changed ${event.repo.name} to public`
            break;
        case "PullRequestReviewEvent":
            message = `${event.payload.action} a pull request review in ${event.repo.name}`
            break;
        case "PullRequestReviewCommentEvent":
            message = `${event.payload.action} a pull request review comment in ${event.repo.name}`
            break;
    } 
    return eventTime + message;
}

