let fetchUserData = function (userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User${userId}`,
                    email: `${userId}@gmail.com`,
                    registrationDate: new Date().toISOString()
                })
            } else {
                reject(new Error("Invalid User ID: must be a positive number"))
            }
        }, 1500);
    })
}

let fetchUserPosts = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "Learn to code", content: "Learn all languages such as Python, HTML, CSS and Javascript", userId: userId },
                    { id: 2, title: "Messi is the GOAT", content: "I know absolutely nothing about sports", userId: userId }
                ])
            } else {
                reject(new Error("Could not find user post"))
            }
        }, 1000);
    })
}

let getUserAndPosts = (userId) => {
    return fetchUserData(userId)
        .then(user => {
            return fetchUserPosts(user.id)
                .then(posts => {
                    return { ...user, posts }
                })
        })
        .catch(e => {
            console.error(`Error in promises chain: ${e.Promise}`);
            return null;
        })
}
getUserAndPosts(2);

async function getUserDataAsync(userId) {
    try {
        console.log(`Fetching user data for ID: ${userId}`);
        let user = await fetchUserData(userId);
        console.log(`User Data received: ${user}`);

        console.log(`Fetching posts for user ${userId}`);
        let posts = await fetchUserPosts(user.id);
        console.log(`Posts received: ${posts}`);

        return { ...user, posts }
    } catch (e) {
        console.error(`Error in async operation ${e.message}`);
        return null;
    }
}

async function fetchMultipleUsers(userIds) {
    try {
        console.log(`Starting parallel user fetches`);
        let promises = userIds.map(id => fetchUserData(id)); //map splits array and passes it into the function
        let users = await Promise.all(promises);
        console.log(`Successfully fetched all ${users.length} users`);
        return users;
    } catch (e) {
        console.error(`Error in fetching multiple users: ${e.message}`); //first error message shown; on in fetchUserData
        return [];
    }
}

async function fetchUsersAndPosts(userIds) {
    try {
        console.log("Fetching users and posts");
        let users = await fetchMultipleUsers(userIds);

        let userPostPromises = users.map(user =>
            fetchUserPosts(user.id)
                .then(posts => ({ user, posts }))
                .catch(e => {
                    console.error(`Error fetching posts for user ${user.id}: ${e.message}`);
                    return { ...user, post: [] };
                })
        );

        let usersWithPosts = await Promise.all(userPostPromises);
        return usersWithPosts;
    } catch (e) {
        console.error(`Error in fetchUserAndPosts: ${e.message}`);
        return [];
    }
}

async function runTests() {
    try {
        // Test 01: Fetch single user
        console.log("Test 01: Fetching single user data");
        let userData = await getUserDataAsync(1);
        console.log(`Single user data: ${userData}`);

        // Test 02: Fetch multiple users
        console.log("Test 02: Fetching multiple users' data");
        let multipleUsers = await fetchMultipleUsers([1, 2, 3]);
        console.log(`Multiple users result: ${multipleUsers}`);

        // Test 03: Users with posts
        console.log("Test 03: Fetching users with their posts");
        let fetchUsersWithPosts = await fetchUsersAndPosts([1, 2]);
        console.log(`Users with posts result: ${fetchUsersWithPosts}`);

        // Test 04: Error Handling
        console.log("\n Test 4: Testing error handling");
        let errorHandling = await getUserDataAsync(-1);
        console.error(`Error occured: ${errorHandling}`);
    } catch (e) {
        console.error(`Test suite error: ${e.message}`);
    }
}

// Run the tests
runTests();