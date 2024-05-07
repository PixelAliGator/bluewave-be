import dotenv from 'dotenv'
dotenv.config()

export const env = process.env.NODE_ENV || 'dev'
const isProd = env === 'production'
// export const dbURI = isProd ?
//   process.env.DB_URI : 'mongodb://localhost:27017/activityTracker'
export const dbURI = 'mongodb://127.0.0.1:27017/activityTracker';
export const port = process.env.PORT || 8080
//JWT Secret Token
export const secret = process.env.SECRET || 'jumpinghappydogs'
export const stripe_key = process.env.stripeKey || 'sk_test_51NRJzTAEcHfjvuoF7sOpwsKNTUKVuPBlV8FvefIicP2PjvMtv4aMJ779HeNxIyWmLHVFfXFP15Y8q0rxX6M2b2a000RGsQyheT'