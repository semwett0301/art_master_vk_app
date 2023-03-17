import user from "./modules/user";
import {mainInstance} from "./instances/mainInstance";
import application from "./modules/application";
import profile from "./modules/profile";

export default {
    user: user(mainInstance),
    application: application(mainInstance),
    profile: profile(mainInstance)
}
