const roleAccess = (userRole, route, method) => {
    const allowedRoles = {
        "/quiz": {
            GET: ["admin", "superadmin", "user"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/user": {
            GET: ["superadmin"],
        },
    };

    return (allowedRoles[route]?.[method] || []).includes(userRole);
};

export default roleAccess;
