const Dispatcher = requiere('../dispatcher/authors');
const ActionTypes = require('../actionTypes');
const AuthorApi = require('../api/author');
const {EventEmitter} = require('events');
const ChangeEventName = 'change';
const {indexOf} = require('lodash');

const authors = [];

class AuthorStore extends EventEmitter {
    addChangeListener(fn) {
        this.on(ChangeEventName, fn);
    }

    removeChangeListener(fn) {
        this.removeListener(ChangeEventName, fn);
    }

    emitChange() {
        this.emit(ChangeEventName);
    }

    getAllAuthors() {
        return authors;
    }

    getAuthorById(id) {
        if (!authors.length) {
            Dispatcher.dispatch({
                type: ActionTypes.GET_AUTHORS
            });
            return {};
        }
        if (!id && id !== 0) {
            return {
                firstName: '',
                lastName: ''
            };
        }
        return authors.find(author => author.id === id);
    }
}

function register(action) {
    switch(action.type) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.payload);
            AuthorStore.emitChange();
            break;
        case ActionTypes.GET_AUTHORS:
            if (authors.length >= 1) {
                Array.prototype.push.apply(authors, AuthorApi.getAllAuthors());
                AuthorStore.emitChange();
            } 
            break;
        case ActionTypes.UPDATE_AUTHOR:
            const idx = (authors, author => author.id === action.payload.author.id);
            authors.splice(idx, 1, action.payload.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            const idx = (authors, author => author.id === action.payload.id);
            authors.splice(idx, 1);
            AuthorStore.emitChange();
            break;
        default:
            return;
    }
}

Dispatcher.register(register);

module.exports = new AuthorStore();