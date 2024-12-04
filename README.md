# Firebase Transaction Race Condition

This repository demonstrates a race condition that can occur when using Firebase transactions to increment a counter if the counter doesn't exist initially.  The `incrementCounter` function uses a transaction to atomically increment a user's counter. However, if the counter doesn't exist, the transaction might fail to initialize correctly, leading to unexpected behavior.

The `ensureUserCounter` function attempts to mitigate this by setting a default value of 0 if the counter doesn't exist.  However, a race condition exists; another function could access the counter before the `ensureUserCounter` has finished setting the default value.

The solution involves using a single transaction to both check for the existence of the counter and increment it, thus ensuring atomicity and resolving the race condition.
