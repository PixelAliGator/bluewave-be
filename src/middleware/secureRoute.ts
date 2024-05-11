import jwt, { JwtPayload } from 'jsonwebtoken';
import { promisify } from 'util';
import { Request, Response, NextFunction } from 'express';
import User, {userSchemaType} from '../models/userModel';  
import { NotAuthorized } from '../lib/errors'; 
import { secret } from '../config/enviorment';

// Typing the promisified function explicitly
interface VerifyFunction {
  (token: string, secret: string): Promise<JwtPayload>;
}

interface TheRequest extends Request {
    currentUser: userSchemaType;
}

const verifyAsync: VerifyFunction = promisify(jwt.verify.bind(jwt)) as unknown as VerifyFunction;

export default  function secureRoute(req: Request, res: Response, next: NextFunction) {
    const rawToken = req.headers.authorization;
    if (!rawToken || !rawToken.startsWith('Bearer ')) {
        return next(new NotAuthorized("Invalid Request."));
    }
    const token = rawToken.replace('Bearer ', '');

    try {
        // Using the correctly typed function
        const decoded = verifyAsync(token, secret) as JwtPayload;
        decoded.then((async(data:JwtPayload) => {
            const user = await User.findById(data.user.id);
            if (!user) {
                throw new Error("User does not exist.")
            }
             //@ts-ignore
        req.currentUser = user;
        next();
        }))
        .catch((err:Error) => {
            return next(new NotAuthorized(err.message))
        })
       
       
    } catch (err) {
        next(new NotAuthorized("Corrupted Request."));
    }
}
