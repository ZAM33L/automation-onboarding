const { I } = inject();
const data06 = require('../data/data06')
const xpaths06 = require('../xpaths/xpaths06')
const assert = require('assert');

class StyleSegmentAssert {
    async pageLoad() {
        await I.amOnPage(data06.webPage);
    }
    //bold
    async assertCellBold() {
        await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue00}'])`);
        //
        await I.click(`(//span[@role='cell' and text()='${data06.matrixCellValue00}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths06.boldOption, 5);

        await I.moveCursorTo(xpaths06.boldOption);
        await I.wait(1);
        await I.click(xpaths06.boldOption);

        await I.wait(1);
        //plain assertion
        //await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue00}' and contains(@style, '${data06.boldResultStyle}')])[1]`);

        const actualStyleBold = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data06.matrixCellValue00}'])[1]`,'style')
        const expectedStyleBold = actualStyleBold.includes(data06.boldResultStyle)
        I.assertEqual(expectedStyleBold,true,'error - value mismatch')
    }
    //italic
    async assertCellItalic() {
        await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue01}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data06.matrixCellValue01}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths06.italicOption, 5);

        await I.moveCursorTo(xpaths06.italicOption);
        await I.wait(1);
        await I.click(xpaths06.italicOption);

        await I.wait(1);
        //plain assert
        // await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue01}' and contains(@style, '${data06.italicResultStyle}')])[1]`);

        const actualStyleItalic = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data06.matrixCellValue01}'])[1]`,'style')
        const expectedStyleItalic = actualStyleItalic.includes(data06.italicResultStyle)
        I.assertEqual(expectedStyleItalic,true,'error - value mismatch')
    }

    async assertCellUnderlined() {
        await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue02}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data06.matrixCellValue02}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths06.underlineOption, 5);

        await I.moveCursorTo(xpaths06.underlineOption);
        await I.wait(1);
        await I.click(xpaths06.underlineOption);

        await I.wait(1);
        //plain assertion
        //await I.seeElement(`(//span[@role='cell' and text()='${data06.matrixCellValue06}' and contains(@style, '${data06.underlineResultSyle}')])[1]`);

        const actualStyleUnderlined = await I.grabAttributeFrom(`(//span[@role='cell' and text()='${data06.matrixCellValue02}'])[1]`,'style')
        const expectedStyleUnderlined = actualStyleUnderlined.includes(data06.underlineResultSyle)
        I.assertEqual(expectedStyleUnderlined,true,'error - value mismatch')
    }

}
module.exports = new StyleSegmentAssert()