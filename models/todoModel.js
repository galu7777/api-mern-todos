const {Schema, model} = require('mongoose');

const todosSchema = new Schema({
    title: String,
    description: String,
    todoStatus: {
        type: Boolean,
        default: false
    },
    owner: String,
    complete_at: {
        type: Date,
        default: null
    },
    create_at: {
        type: Date,
        default: new Date()
    }
});

todosSchema.methods.isComplete = function() {
    return !this.todoStatus
};

module.exports = model('Todo', todosSchema);