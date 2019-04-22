let nextTargetId = 0;
export const addNewTarget = text => ({
  type: 'ADD_TARGET',
  id: nextTargetId++,
  text
})

export const deleteTarget = id => ({
    type: 'DELETE_TARGET',
    id: id
  })