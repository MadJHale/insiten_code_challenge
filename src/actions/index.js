export const addNewTarget = ( newTarget) => ({
  type: 'ADD_TARGET',
  newTarget
})

export const editTarget = data => ({
    type: 'EDIT_TARGET',
    data
})

export const deleteTarget = id => ({
    type: 'DELETE_TARGET',
    id: id
})

export const updateTarget = (newData) => ({
    type: 'UPDATE_TARGET',
    newData
})

export const delTarget = (oldData) => ({
    type: 'DEL_TARGET',
    oldData
})