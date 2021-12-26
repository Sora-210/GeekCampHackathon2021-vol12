import { db } from './instance'
import { Users } from './models/M_Users'
import { Logs } from './models/M_Logs'
import { Targets } from './models/M_Targets'

const DB = {
    instance: db,
    Users: Users,
    Targets: Targets,
    Logs: Logs
}

async function auth() {
    db.authenticate()
        .then((res) => {
            console.log("DB Authenticate Success!");
        })
        .catch((e) => {
            console.log("DB Authenticate Error");
            console.log(e);
            console.log("######################");
            process.exit(1)
        })
}

export {
    auth,
    DB
}