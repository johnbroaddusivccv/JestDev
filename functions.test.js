const functions = require('./functions');
// RUNNING BEFORE AND AFTER TEST on EACH
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());


//  RUNNING BEFORE AND AFTER TEST on ALL
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('database closed..');


// DESCRIBE TARGET TEST describe block ===============
const nameCheck = () => console.log('Checking Name...');

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
});
test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})
// WE CAN TEST FOR NULL || OR UNDEFINED TRUTHY OF FALSY VALUES 
test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('User should be John Broaddus object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'John',
        lastName: 'Broaddus'
    });
});

// LESS THAN GREATER THAN
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// REGEX
test('there is no I in team', () => {
    expect('teami').not.toMatch(/I/);
});

// ARRAYS CAN USE THIS FOR A DATABASE
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})
//  PROMISE
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => expect(data.name).toEqual('Leanne Graham'))
});
// ASYNC AWAIT 
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});