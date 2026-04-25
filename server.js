require("dotenv").config()

const app = require("./src/app")
const connectToDB = require("./src/config/db")

connectToDB()

// For Local Development
if (typeof addEventListener === 'undefined') {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

// For Cloudflare Workers
module.exports = {
    fetch: (request, env, ctx) => app(request, env, ctx)
}