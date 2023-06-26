import { Schema, model, Document } from "mongoose";

export interface Users extends Document {
    name:string,
    password:string,
    mail:string
}

const UsersSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true
        },
        mail:{
            type:String,
            required: true
        }
    }
)

export default model<Users>("Users", UsersSchema)