import app from "./api"

const port = process.env.PORT || '3000'

app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + port)
})