import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isFlagged: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
    // responses[], unread, flagged, timestamp, subject: site,doc,stb...
},
{
    timestamps: true
})

export default mongoose.models.Message || mongoose.model('Message', messageSchema)