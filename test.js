let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  
  console.log('Number of Invalid Entries = ', invalidEntries)