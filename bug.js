function incrementCounter(uid) {
  return db.ref('users/' + uid + '/counter').transaction(function(currentCounter) {
    return currentCounter + 1;
  });
}

// This function is called after the user logs in, to ensure they have a counter
function ensureUserCounter(uid) {
  db.ref('users/' + uid + '/counter').once('value', function(snapshot) {
    if (!snapshot.exists()) {
      db.ref('users/' + uid + '/counter').set(0);
    }
  });
}