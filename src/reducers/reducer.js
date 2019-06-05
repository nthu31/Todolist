const initCategory = {
    category: 'All',
    posts: null,
    keys: []
};

export const categoryReducer = (state = initCategory, action) => {
    switch (action.type) {
        case '@END_GET_CATEGORY':
            return {
                category: action.category.charAt(0).toUpperCase() + action.category.slice(1),
                posts: action.posts,
                keys: state.keys
            };
        case '@END_GET_CATEGORY_KEYS':
            return Object.assign({}, state, {
                keys: action.keys
            });
        case '@END_TOGGLE_IMPORTANT':
            return Object.assign({}, state, {
                posts: action.posts
            });
        case '@END_CHECK_TODO':
            return Object.assign({}, state, {
                posts: action.posts
            });
        case '@END_ADD_TODO':
            return Object.assign({}, state, {
                posts: action.posts
            });
        case '@END_DELETE_TODO':
            return Object.assign({}, state, {
                posts: action.posts
            });
        default:
            return state;
    }
};
