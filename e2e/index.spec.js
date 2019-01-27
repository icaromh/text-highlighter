import puppeteer from 'puppeteer'

let browser
let page
const URL = 'http://localhost:8080'

describe('E2E Testing', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 80,
    })
    page = await browser.newPage()
    await page.goto(URL)
    await page.evaluate(() => {
      document.querySelector('.Editor__content').innerHTML = 'select this text'
    })
  })

  afterAll(() => {
    browser.close()
  })

  test('should be able to select text, mark it as red and filter', async () => {
    const editor = '.Editor__content'
    await page.focus(editor)
    await page.evaluate(() => {
      document.execCommand('selectAll', false)
    })

    await page.click('.Toolbar > button:first-child')
    await page.click('.HighlightFilterContainer > button:first-child')

    const text = await page.$eval('.Hightlight', e => e.innerText)
    expect(text).toBe('select this text')
  })
})
