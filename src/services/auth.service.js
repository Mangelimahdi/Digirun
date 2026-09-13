const matchesIdentifier = (user, identifier = "") => {
    const value = identifier.trim();
    return ((user.id === value) || (user.phone === value));
}

export {
    matchesIdentifier,
}
