

const data03 = require("../data/data03");

const xpaths03 = {
    tableHeading: `//div[@id='headerEditor']//span[text()='${data03.tableHeading}']`,

    centerHeader: `//span[text()='${data03.centerHeader}']`,
    rowHeader:`//span[text()='${data03.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data03.rowHeaderCellValue00}']`,
    columnHeader:`//span[text()='${data03.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data03.yearId00}') and contains(@id,'${data03.metricId00}')]`,

    cellValue:`(//span[@role='cell' and text()='${data03.matrixCellValue00}'])[1]`,

    homeTab:`//ol//span[text()='${data03.tabListItem01}']`,
    insertTab:`//ol//span[text()='${data03.tabListItem02}']`,
    designTab:`//ol//span[text()='${data03.tabListItem03}']`,
    exportTab:`//ol//span[text()='${data03.tabListItem04}']`,

    boldOption:`//div[@data-label='${data03.tabListItem01}']//span[contains(@class,'${data03.boldClass}')]`,
    underlineOption:`//div[@data-label='${data03.tabListItem01}']//span[contains(@class,'${data03.underlineClass}')]`,
    italicOption:`//div[@data-label='${data03.tabListItem01}']//span[contains(@class,'${data03.italicClass}')]`,
};

module.exports = xpaths03;
