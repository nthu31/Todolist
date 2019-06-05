import {
    listPosts as listPostsFromApi,
    listPostKeys as listPostKeysFromApi,
    createCategory as createCategoryFromApi,
    toggleImportant as toggleImportantFromApi,
    checkTodo as checkTodoFromApi,
    addTodo as addTodoFromApi,
    deleteTodo as deleteTodoFromApi
} from 'api/todo.js';


const endGetCategory = (category, posts) => {
    return {
        type: '@END_GET_CATEGORY',
        category,
        posts
    };
};

const endGetCategoryKeys = (keys) => {
    return {
        type: '@END_GET_CATEGORY_KEYS',
        keys
    };
}

const endToggleImportant = (posts) => {
    return {
        type: '@END_TOGGLE_IMPORTANT',
        posts
    };
}

const endCheckTodo = (posts) => {
    return {
        type: '@END_CHECK_TODO',
        posts
    };
}

const endAddTodo = (posts) => {
    return {
        type: '@END_ADD_TODO',
        posts
    }
}

const endDeleteTodo = (posts) => {
    return {
        type: '@END_DELETE_TODO',
        posts
    }
}

export const getCategory = (category) => {
    return (dispatch, state) => {
        listPostsFromApi(category)
            .then(data => {
                dispatch(endGetCategory(category, data));
            }).catch(err => {
                console.log(err);
            });
    };
};

export const getCategoryKeys = () => {
    return (dispatch, state) => {
        listPostKeysFromApi()
            .then(keys => {
                dispatch(endGetCategoryKeys(keys));
            }).catch(err => {
                console.log(err);
            });
    };
};

export const importantToggle = (category, id) => {
    return (dispatch, state) => {
        toggleImportantFromApi(category, id)
            .then(posts => {
                dispatch(endToggleImportant(posts[category]));
            }).catch(err => {
                console.log(err);
            });
    };
}

export const deleteTodo = (category, id) => {
    return (dispatch, state) => {
        deleteTodoFromApi(category, id)
            .then(posts => {
                dispatch(endDeleteTodo(posts[category]));
            }).catch(err => {
                console.log(err);
            });
    };
}

export const createCategory = (name) => {
    return (dispatch, state) => {
        createCategoryFromApi(name)
            .then(posts => {
                dispatch(endGetCategoryKeys(Object.keys(posts)));
            }).catch(err => {
                console.log(err);
            });
    };
};

export const checkTodo = (category, id) => {
    return (dispatch, state) => {
        checkTodoFromApi(category, id)
            .then(posts => {
                dispatch(endCheckTodo(posts[category]));
            }).catch(err => {
                console.log(err);
            });
    };
}

export const addTodo = (category, title, description = '', deadline = '', remark = '', important = false) => {
    return (dispatch, state) => {
        addTodoFromApi(category, title, description, deadline, remark, important).then(posts => {
            dispatch(endAddTodo(posts[category]));
        }).catch(err => {
            console.log(err);
        })
    };
}
