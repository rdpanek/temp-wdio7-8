describe('Test', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })
    it('open', async () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        await browser.url(`https://the-internet.herokuapp.com/login`)
    })
})

