import type { Emoji } from "./Emoji"
export default interface Post {
    comment:string,
    emoji:Emoji,
    addDate:Date,
    postId:number,
    userId:number
}