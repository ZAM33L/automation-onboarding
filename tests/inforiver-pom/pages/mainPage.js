const { I } = inject();
const data01 = require('../data/data01')
const xpaths01 = require('../xpaths/xpaths01')
const assert = require('assert');

class mainPage {

    async pageLoad() {
        await I.amOnPage(data01.webPage);
        await I.say("01 . page loaded")
    }

    async visibleTableHeading() {
        await I.seeElement(xpaths01.tableHeading)
        await I.say('02 . table heading loaded')
    }

    async visibleTableHeaders() {
        await I.seeElement(xpaths01.centerHeader)
        await I.seeElement(xpaths01.rowHeader)
        await I.seeElement(xpaths01.columnHeader)
    }

    async visibleCells() {
        await I.seeElement(xpaths01.cellValue)
    }

    async visibleTabList() {
        await I.seeElement(xpaths01.homeTab) 
        await I.seeElement(xpaths01.insertTab)
        await I.seeElement(xpaths01.designTab)
        await I.seeElement(xpaths01.exportTab) 
    }

}
module.exports = new mainPage()