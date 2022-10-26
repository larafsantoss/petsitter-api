const { getUser } = require("./user.controller")

it("getUser should return user if it exists", () => {
    expect(getUser({ params: { id: "userId" }}, undefined)).toBe({});
});
