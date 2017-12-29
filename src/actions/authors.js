const Dispatcher = require('../dispatcher/authors');
const AuthorApi = require('../../api/author');
const ActionTypes = require('../actionTypes');

module.exports = {
    createAuthor(author) {
        const newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            type: ActionTypes.CREATE_AUTHOR,
            payload: {
                author: newAuthor
            }
        });
    }
};