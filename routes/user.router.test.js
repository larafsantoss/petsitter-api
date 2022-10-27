const axios = require("axios");

it("should create a user", async () => {
    const random = Math.round(Math.random()*100000)
    const newUser = {
        name: `name ${random}`,
        email: `name${random}@email.com`
    }
    
    const response = await axios.post("http://localhost:4000/api/users/create", newUser)

    expect(response.data.data.email).toBe(newUser.email)
});
