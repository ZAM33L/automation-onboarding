

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

    fillcolorIcon:`(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]`,
    fillColorDefaultColor:`//div[@data-label='Home']//div[contains(@class,'colorpicker')]//i[contains(@style, 'border-bottom') and contains(@style, 'rgb(255, 255, 0)')]`,
    fillColorDropdownArrow:`(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]`,
    fillColorModal:`//div[@class='bf-ui-colopicker-modal']`,
    fillColorPaletteColor:`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${data03.paletteColor}']`,
    fillColorCustomColorBtn:`//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]`,
    fillColorCustomColorModal:`//div[contains(@class,'bf-ui-colopicker-custom-modal')]`,
    fillColorCustomColorTypeDiv:`//div[@aria-haspopup='listbox']`,
    fillColorCustomColorTypeDivMenu:`//div[@role='menu']`,
    fillColorCustomColorTypeDivMenuOption:`//span[text()='${data03.colorCode01}']`,
    fillColorCustomColorTypeDivMenuResult:`//div[@aria-haspopup='listbox']//*[text()='${data03.colorCode01}']`,
    fillColorCustomColorColorCodeInput:`//div[@aria-haspopup='listbox']/../following-sibling::div/input`,
    fillColorModalSaveBtn:`//button[text()='Save']`,
    
};

module.exports = xpaths03;
