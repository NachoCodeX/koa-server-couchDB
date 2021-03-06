import { Context } from "koa";
import { SecurityService } from "../security";
import { handleError } from "../utils";
import { NODE_NAME } from "../config";
import { HTTP_401_UNAUTHORIZED } from "../controllers";
const { decodeToken } = new SecurityService()


export async function isAuth(ctx: Context, next: Function) {
    const auth = ctx.request.headers.authorization,
        unauthorizedError: any = { message: 'Unauthorized', status: HTTP_401_UNAUTHORIZED };
    let token = ''

    try {
        if (auth)
            token = auth.split(' ')[1]
        else
            throw unauthorizedError

        const sub = await decodeToken(token)
        console.log(sub === NODE_NAME);

        if (sub === NODE_NAME)
            await next()
        else
            throw unauthorizedError

    } catch (error) {
        console.log(error);

        const { status, message } = handleError(error)
        ctx.status = status
        ctx.body = message
    }



}