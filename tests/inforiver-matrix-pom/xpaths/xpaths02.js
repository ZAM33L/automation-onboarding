
const data02 = require("../data/data02");

const xpaths02 = {
    tableHeading: `//div[@id='headerEditor']//span[text()='${data02.tableHeading}']`,

    centerHeader: `//span[text()='${data02.centerHeader}']`,
    rowHeader:`//span[text()='${data02.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data02.rowHeaderCellValue00}']`,
    columnHeader:`//span[text()='${data02.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data02.yearId00}') and contains(@id,'${data02.metricId00}')]`,

    cellValue:`(//span[@role='cell' and text()='${data02.matrixCellValue00}'])[1]`,

    homeTab:`//ol//span[text()='${data02.tabListItem01}']`,
    insertTab:`//ol//span[text()='${data02.tabListItem02}']`,
    designTab:`//ol//span[text()='${data02.tabListItem03}']`,
    exportTab:`//ol//span[text()='${data02.tabListItem04}']`,

    boldOption:`//div[@data-label='${data02.tabListItem01}']//span[contains(@class,'${data02.boldClass}')]`,
    underlineOption:`//div[@data-label='${data02.tabListItem01}']//span[contains(@class,'${data02.underlineClass}')]`,
    italicOption:`//div[@data-label='${data02.tabListItem01}']//span[contains(@class,'${data02.italicClass}')]`,
};

module.exports = xpaths02;
