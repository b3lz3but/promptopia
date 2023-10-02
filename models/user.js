import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'E-mail already exists'],
        required: [true, 'E-mail is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username already exists'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid. It must be alphanumeric, and between 8 and 20 characters and also must be unique"]
    },
    image: {
        type: String
    }
});

const User = models.User || model('User', UserSchema);

export default User;