# playwright_poc
playwright_poc


const options = await page.$$eval('select#dropdownId option', options => options.map(option => option.value));
console.log(options);
