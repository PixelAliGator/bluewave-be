import app from './index'
import connectToDb from './db/connectToDB'

async function startApp() {
  try {
    await connectToDb()
    console.log('Database has connected!')
    app.listen(process.env.PORT || 8080, () => console.log('Express is now running'))

  } catch (e) {
    console.log('Something went wrong starting app..')
    console.log(e)
  }
}

startApp()