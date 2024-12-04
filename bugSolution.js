function incrementCounter(uid) {
  return db.ref('users/' + uid + '/counter').transaction(function(currentCounter) {
    if (currentCounter === null) {
      return 1; // Initialize the counter to 1 if it doesn't exist
    } else {
      return currentCounter + 1; // Increment the counter
    }
  });
}

// The ensureUserCounter function is no longer needed because the race condition is resolved within the transaction
// function ensureUserCounter(uid) { ... } 