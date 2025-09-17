const { I } = inject();
const data05 = require('../data/data05')
const xpaths05 = require('../xpaths/xpaths05')
const assert = require('assert');

class MainPage {

    async pageLoad() {
        await I.amOnPage(data05.webPage);
    }

    async assertTableHeading() {
        //tableHeading: `//div[@id='headerEditor']//span[text()='${data05.tableHeading}']`,
        const heading = await I.grabTextFrom(xpaths05.tableHeading)
        I.assert(heading,data05.tableHeading)
    }

    async assertTableHeaders() {
        //centerHeader: `//span[text()='${data05.centerHeader}']`
        const headingInCenter = await I.grabTextFrom(xpaths05.centerHeader)
        I.assert(headingInCenter,data05.centerHeader)

        //rowHeader: `//span[text()='${data05.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data05.rowHeaderCellValue00}']`
        const headingInRow = await I.grabTextFrom(xpaths05.rowHeader)
        I.assert(headingInRow,data05.rowHeaderCellValue00)

        //columnHeader: `//span[text()='${data05.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data05.yearId00}') and contains(@id,'${data05.metricId00}')]`
        const xpathTemp = `//span[text()='Category']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data05.yearId00}') and contains(@id,'${data05.metricId00}')]//span//div[contains(text(),'${data05.metricId00}')]`
        const headingInColumn = await I.grabTextFrom(xpathTemp)
        I.assert(headingInColumn.trim(),data05.metricId00Full.trim())
    }

    async assertCells() {
        //`(//span[@role='cell' and text()='${data05.matrixCellValue00}'])[1]`
        const valueOfCell = await I.grabTextFrom(xpaths05.cellValue)
        I.assert(valueOfCell,data05.matrixCellValue00)
    }

    async assertTabList() {
        // homeTab: `//ol//span[text()='${data05.tabListItem01}']`,
        // insertTab: `//ol//span[text()='${data05.tabListItem02}']`,
        // designTab: `//ol//span[text()='${data05.tabListItem03}']`,
        // exportTab: `//ol//span[text()='${data05.tabListItem04}']`,
        const homeTabOption = await I.grabTextFrom(xpaths05.homeTab) 
        const insertTabOption = await I.grabTextFrom(xpaths05.insertTab)
        const designTabOption = await I.grabTextFrom(xpaths05.designTab)
        const exportTabOption = await I.grabTextFrom(xpaths05.exportTab)
        
        I.assert(homeTabOption,data05.tabListItem01)
        I.assert(insertTabOption,data05.tabListItem02)
        I.assert(designTabOption,data05.tabListItem03)
        I.assert(exportTabOption,data05.tabListItem04)
    }

}
module.exports = new MainPage()