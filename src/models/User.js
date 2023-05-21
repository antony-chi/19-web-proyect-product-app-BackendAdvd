import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        inique: true
    },
    password: {
        type:String,
        require: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("User", userSchema);