import { getJwtToken, userIsAdmin } from "../../helpers/auth";

export default {
    authenticated: !!getJwtToken(),
    roles: {
        admin: userIsAdmin()
    },
};
