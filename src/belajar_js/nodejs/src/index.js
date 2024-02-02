import express from "express";
import router from "./routes/users.js";
import logRequest from "./middleware/log.js";

const app = express()
const port = 3000
const userRouter = router
app.use(express.json())
const middlewareLog = logRequest

app.use(middlewareLog)

app.use("/users", userRouter)

app.listen(port, () => {
	console.log(`app running at port ${port}`);
})

