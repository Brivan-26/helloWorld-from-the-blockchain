const HelloWorld = artifacts.require("HelloWorld")

contract("HelloWorld", () => {
    it('Should returns Hello world!', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello()

        assert(result === 'Hello world!')
    })
})