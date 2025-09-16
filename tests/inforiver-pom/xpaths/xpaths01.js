const data01 = require("../data/data01");

const xpaths01 = {
    tableHeading: `//div[@id='headerEditor']//span[text()='${data01.tableHeading}']`,

    centerHeader: `//span[text()='${data01.centerHeader}']`,
    rowHeader:`//span[text()='${data01.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data01.rowHeaderCellValue00}']`,
    columnHeader:`//span[text()='${data01.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data01.yearId00}') and contains(@id,'${data01.metricId00}')]`,

    cellValue:`(//span[@role='cell' and text()='${data01.matrixCellValue00}'])[1]`,

    homeTab:`//ol//span[text()='${data01.tabListItem01}']`,
    insertTab:`//ol//span[text()='${data01.tabListItem02}']`,
    designTab:`//ol//span[text()='${data01.tabListItem03}']`,
    exportTab:`//ol//span[text()='${data01.tabListItem04}']`,
};

module.exports = xpaths01;
