const roleAccess = (userId, userRole, route, method) => {
    const allowedRoles = {
        "/quiz": {
            GET: ["admin", "superadmin", "user"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/user": {
            GET: ["superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/quiz-category": {
            GET: ["admin", "superadmin"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/quiz-question": {
            GET: ["admin", "superadmin"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/quiz-answer": {
            GET: ["admin", "superadmin"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/user-attempt": {
            GET: ["admin", "superadmin"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
        "/user-answer": {
            GET: ["admin", "superadmin"],
            POST: ["admin", "superadmin"],
            PUT: ["admin", "superadmin"],
            DELETE: ["admin", "superadmin"],
        },
    };

    return (allowedRoles[route]?.[method] || []).includes(userRole);
};

export default roleAccess;
