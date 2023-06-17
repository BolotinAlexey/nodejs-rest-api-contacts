/*
1 The response must have 'status code' 200
2 The response must contain token. It hould have a data type of String.
3 The response must contain an object named 'user' with two fields: 'email' and 'subscription'. Both fields should have a data type of String.
*/

const mongoose = require("mongoose");
const request=require("supertest")

const signIn = require("./signIn");
const app = require("../../app");
const { User } = require("../../models");

const { DB_HOST_TEST } = process.env;

describe("test signIn function", () => {
    let server = null;
    beforeAll(async () => {
        await mongoose.connect(DB_HOST_TEST);
        server = app.listen(5000);
    })
    afterAll(async () => {
        await mongoose.connection.close();
        server.close();
    })

    afterEach(async ()=> await User.deleteMany())

    test('should ', async () => {
        const email = "test@example.com"
        const password = "12345"
        const signData = {
           email,password
       }

        const result = await request(app).post('/api/auth/register').send(signData);

        const { body:{token,user}, statusCode } = await request(app).post("/api/auth/signin").send(signData);
        expect(statusCode).toBe(200);

        expect(token).toBeDefined();
        expect(typeof token).toBe('string');

        expect(user).toBeDefined();
        expect(typeof user).toBe('object');

        expect(user.email).toBeDefined();
        expect(typeof user.email).toBe('string');
        expect(user.email).toBe(email)

        expect(user.subscription).toBeDefined();
        expect(typeof user.subscription).toBe('string');
        expect(user.subscription).toBe('starter')

        const {token:tokenBD,subscription:subscriptionBD} = await User.findOne({ email });

        expect(token).toBe(tokenBD);
        expect(subscriptionBD).toBe('starter');
    });
})