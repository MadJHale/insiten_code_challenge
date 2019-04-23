export const addNewTarget = (nextTargetId, newTarget) => ({
  type: 'ADD_TARGET',
  id: nextTargetId,
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

export const updateTable = text => ({
    type: 'UPDATE_TABLE',
    text
})