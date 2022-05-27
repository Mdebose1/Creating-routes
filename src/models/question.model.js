const mongoose = require("mongoose")

const questionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        },
        order: {
            type: Number,
            required: true
        },
        quizId: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
)

module.exports = mongoose.model("question", questionSchema)