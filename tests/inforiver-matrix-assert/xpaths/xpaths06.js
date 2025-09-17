

const data06 = require("../data/data06");

const xpaths06 = {
    tableHeading: `//div[@id='headerEditor']//span[text()='${data06.tableHeading}']`,

    centerHeader: `//span[text()='${data06.centerHeader}']`,
    rowHeader: `//span[text()='${data06.centerHeader}']/ancestor::div[8]/following-sibling::div//span[text()='${data06.rowHeaderCellValue00}']`,
    columnHeader: `//span[text()='${data06.centerHeader}']/ancestor::div[5]/following-sibling::div/div[contains(@id,'${data06.yearId00}') and contains(@id,'${data06.metricId00}')]`,

    cellValue: `(//span[@role='cell' and text()='${data06.matrixCellValue00}'])[1]`,

    homeTab: `//ol//span[text()='${data06.tabListItem01}']`,
    insertTab: `//ol//span[text()='${data06.tabListItem02}']`,
    designTab: `//ol//span[text()='${data06.tabListItem03}']`,
    exportTab: `//ol//span[text()='${data06.tabListItem04}']`,

    boldOption: `//div[@data-label='${data06.tabListItem01}']//span[contains(@class,'${data06.boldClass}')]`,
    underlineOption: `//div[@data-label='${data06.tabListItem01}']//span[contains(@class,'${data06.underlineClass}')]`,
    italicOption: `//div[@data-label='${data06.tabListItem01}']//span[contains(@class,'${data06.italicClass}')]`,

    fillcolorIcon: `(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[1]`,
    fillColorDefaultColor: `//div[@data-label='Home']//div[contains(@class,'colorpicker')]//i[contains(@style, 'border-bottom') and contains(@style, 'rgb(255, 255, 0)')]`,
    fillColorDropdownArrow: `(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[2]`,
    fillColorModal: `//div[@class='bf-ui-colopicker-modal']`,
    fillColorPaletteColor: `//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${data06.paletteColor}']`,

    fillColorCustomColorBtn: `//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]`,
    fillColorCustomColorModal: `//div[contains(@class,'bf-ui-colopicker-custom-modal')]`,
    fillColorCustomColorTypeDiv: `//div[@aria-haspopup='listbox']`,
    fillColorCustomColorTypeDivMenu: `//div[@role='menu']`,
    fillColorCustomColorTypeDivMenuOption: `//span[text()='${data06.colorCode01}']`,
    fillColorCustomColorTypeDivMenuResult: `//div[@aria-haspopup='listbox']//*[text()='${data06.colorCode01}']`,
    fillColorCustomColorColorCodeInput: `//div[@aria-haspopup='listbox']/../following-sibling::div/input`,
    fillColorModalSaveBtn: `//button[text()='Save']`,


    fontcolorIcon: `(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[3]`,
    fontcolorDefaultColor: `//div[@data-label='Home']//div[contains(@class,'colorpicker')]//i[contains(@style, 'border-bottom') and contains(@style, 'rgb(255, 0, 10)')]`,
    fontColorDropdownArrow: `(//div[@data-label = 'Home']//descendant::div[contains(@class,'colorpicker')]/descendant::i)[4]`,
    fontColorModal: `//div[@class='bf-ui-colopicker-modal']`,
    fontColorPaletteColor: `//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']//*[local-name()='svg']//*[local-name()='rect' and @fill='${data06.paletteColor}']`,

    fontColorCustomColorBtn: `//div[@class='bf-ui-colopicker-modal']/div[@class='bf-ui-colopicker-Palette']/following-sibling::div[contains(@class,'bf-ui-colopicker-custom-picker-div')]`,
    fontColorCustomColorModal: `//div[contains(@class,'bf-ui-colopicker-custom-modal')]`,
    fontColorCustomColorTypeDiv: `//div[@aria-haspopup='listbox']`,
    fontColorCustomColorTypeDivMenu: `//div[@role='menu']`,
    fontColorCustomColorTypeDivMenuOption: `//span[text()='${data06.colorCode01}']`,
    fontColorCustomColorTypeDivMenuResult: `//div[@aria-haspopup='listbox']//*[text()='${data06.colorCode01}']`,
    fontColorCustomColorColorCodeInput: `//div[@aria-haspopup='listbox']/../following-sibling::div/input`,
    fontColorModalSaveBtn: `//button[text()='Save']`,
};

module.exports = xpaths06;