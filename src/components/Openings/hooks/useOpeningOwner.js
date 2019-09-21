import React from "react";

import { currentUser } from "../../../helpers/auth";

export default (user) => {
    const currentUserId = currentUser() ? currentUser().id : null;

    if (currentUserId) {
        const [openingOwner, setOpeningOwner] = React.useState(currentUserId === Number(user.data.id));

        React.useEffect(() => {
            setOpeningOwner(currentUserId === Number(user.data.id))
        }, [currentUserId, user]);

        return openingOwner;
    } else {
        return false;
    }
}
