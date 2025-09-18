const { I } = inject();
const data02 = require('../data/data02')
const xpaths02 = require('../xpaths/xpaths02')
const assert = require('assert');

class StyleSegment {
    async pageLoad() {
        await I.amOnPage(data02.webPage);
        await I.say("01 . page loaded")
    }
    //bold
    async makeCellBold() {
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue00}'])[1]`);
        //
        await I.click(`(//span[@role='cell' and text()='${data02.matrixCellValue00}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths02.boldOption, 5);

        await I.moveCursorTo(xpaths02.boldOption);
        await I.wait(1);
        await I.click(xpaths02.boldOption);

        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue00}' and contains(@style, '${data02.boldResultStyle}')])[1]`);
    }
    //italic
    async makeCellItalic() {
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue01}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data02.matrixCellValue01}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths02.italicOption, 5);

        await I.moveCursorTo(xpaths02.italicOption);
        await I.wait(1);
        await I.click(xpaths02.italicOption);

        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue01}' and contains(@style, '${data02.italicResultStyle}')])[1]`);
    }

    async makeCellUnderlined() {
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue02}'])[1]`);
        await I.click(`(//span[@role='cell' and text()='${data02.matrixCellValue02}'])[1]`);
        await I.wait(1);
        await I.waitForElement(xpaths02.underlineOption, 5);

        await I.moveCursorTo(xpaths02.underlineOption);
        await I.wait(1);
        await I.click(xpaths02.underlineOption);

        await I.wait(1);
        await I.seeElement(`(//span[@role='cell' and text()='${data02.matrixCellValue02}' and contains(@style, '${data02.underlineResultSyle}')])[1]`);
    }

}
module.exports = new StyleSegment()