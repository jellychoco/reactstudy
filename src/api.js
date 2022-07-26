export const getUserUrl = () => {
    const index = Math.floor(Math.random() * 10) || 1;

    return `https://jsonplaceholder.typicode.com/users/${index}`;
};


export function fetchUser() {
    return new Promise((res, rej) => {
        // setTimeout(() => {
        res({
            name: 'Will'
        })
        // }, 1000);
    })
}

export function fetchProfileData() {
    let user = fetchUser()

    return {
        user: wrapPromise(user),
    }
}

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

export const hooks = async () => {
    const user = await fetchUser();

    return {
        user
    }
}