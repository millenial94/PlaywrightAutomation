const {test, expect} = require('@playwright/test')

test('Handling Table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const table=await page.locator('#productTable')

    //Total number Columns
    const columns=await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count())
    expect(await columns.count()).toBe(4)

    //Total number Rows
    const rows=await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())
    expect(await rows.count()).toBe(5)

    //Select Checkbox for Product4
    /*const matchedRow=rows.filter({
        has:page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedRow.locator('input').check();*/

    //Select Multiple Products by Reusable Function
    /*await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 3')
    await selectProduct(rows, page, 'Product 5')*/

    //Print all details using loop
    /*for(let i=0;i<await rows.count();i++)   //for incrementing the rows
    {
        const row=rows.nth(i);
        const columnTableData=row.locator('td')
        for(let j=0;j< await columnTableData.count(); j++)   //for incrementing the columns
        {
            console.log(await columnTableData.nth(j).textContent());
        }
    }*/

    //Read data from all the pages
    const pages=await page.locator('.pagination li a')
    console.log('Number of pages in the table:', pages)

    for(let p=0; p< await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++)   //for incrementing the rows
        {
            const row=rows.nth(i);
            const columnTableData=row.locator('td')
            for(let j=0;j< await columnTableData.count(); j++)   //for incrementing the columns
            {
                console.log(await columnTableData.nth(j).textContent());
            }
        }
        await page.waitForTimeout(1000)
    }        

    await page.waitForTimeout(5000)
})

async function selectProduct(rows, page, name)
{
    const matchedRow=rows.filter({
        has:page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}