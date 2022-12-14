export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        case 'SET_PLAYLISTS':
            return { ...state, playLists: action.playLists };
        case 'SET_DISCOVER_WEEKLY':
            return { ...state, discoverWeekly: action.discoverWeekly };
        default: return state;
    }
};