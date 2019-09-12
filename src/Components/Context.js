import React from 'react';

const noteAndFolderContext = React.createContext({
    // routeProps?
    // store?
    // folders? should we be more specific and say store.folders?
    // notes? should we be more specific and say store.notes?
    // folder? how do we create the context of sending a single folder object
    // note? how do we create the context of sending a single note object
    // onClickCancel? But if we are already passing down the routeProps, do we need to send down the method?
    folders: [],
    notes: [],
    deleteItem: () => {}
})

export default noteAndFolderContext