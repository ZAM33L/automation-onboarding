

const data04 = require("../data/data04");

const xpaths04 = {
    tableHeading: `//div[@id='headerEditor']//span[text()='${data04.tableHeading}']`,

    centerHeader: `//span[text()='${data04.centerHeader}']`,
    rowHeader:`//span[text()='${data04.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data04.rowHeaderCellValue00}']`,
    columnHeader:`//span[text()='${data04.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data04.yearId00}') and contains(@id,'${data04.metricId00}')]`,

    cellValue:`(//span[@role='cell' and text()='${data04.matrixCellValue00}'])[1]`,

    homeTab:`//ol//span[text()='${data04.tabListItem01}']`,
    insertTab:`//ol//span[text()='${data04.tabListItem02}']`,
    designTab:`//ol//span[text()='${data04.tabListItem03}']`,
    exportTab:`//ol//span[text()='${data04.tabListItem04}']`,

    boldOption:`//div[@data-label='${data04.tabListItem01}']//span[contains(@class,'${data04.boldClass}')]`,
    underlineOption:`//div[@data-label='${data04.tabListItem01}']//span[contains(@class,'${data04.underlineClass}')]`,
    italicOption:`//div[@data-label='${data04.tabListItem01}']//span[contains(@class,'${data04.italicClass}')]`,

    fillcolorIcon:`(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]`,
    fillColorDefaultColor:`//div[@data-label='Home']//div[contains(@class,'colorpicker')]//i[contains(@style, 'border-bottom') and contains(@style, 'rgb(255, 255, 0)')]`,

    fontcolorIcon:`(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[3]`,
    fontcolorDefaultColor:`//div[@data-label='Home']//div[contains(@class,'colorpicker')]//i[contains(@style, 'border-bottom') and contains(@style, 'rgb(255, 0, 10)')]`,
};

module.exports = xpaths04;
