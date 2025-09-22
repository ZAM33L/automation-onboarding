const { I } = inject()
const assert = require('assert')

class TotalsOption {

    WebPage = `https://inforiver-webtest-premium.azurewebsites.net/?csvLocation=CF_REG-03.csv&config=CF_REG-03.json&URLLoad=true`
    TotalsIcon = `//div[contains(@class,'totalIcon')]`;
    TotalsModal = `//div[contains(@class,'popover')]//div[contains(@class,'dropdownOption')]`;
    RowGroup = `//div[@role='rowgroup']`
    ColumnGroup = `//div[@class='matrix-table-header']`



    RowGrandTotalOptions = {
        RowGrandTotalTopBtn: `//div[text()='Row Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Top']`,
        RowGrandTotalBottomBtn: `//div[text()='Row Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Bottom']`,
        RowGrandTotalOffBtn: `//div[text()='Row Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Off']`,
        CheckedBtnDefaultRGT: `//div[text()='Row Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Top']/ancestor::div/preceding-sibling::input[@checked]`,
    }

    ColumnGrandTotalOptions = {
        DivCGT: `//div[@class='header-scrollable-container']//span[text()='Grand Total']`,
        ColumnGrandTotalLeft: `//div[text()='Column Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Left']`,
        ColumnGrandTotalRight: `//div[text()='Column Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Right']`,
        ColumnGrandTotalOffBtn: `//div[text()='Column Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Off']`,
        CheckedBtnDefaultCGT: `//div[text()='Column Grand Total']/following-sibling::ul//span[contains(@class,'radio_label') and text()='Off']/ancestor::div/preceding-sibling::input[@checked]`,
    }

    Conditions = {
        FirstRowHeader: `(//div[@role='cell' and contains(@style,'left: 0px; top: 0px')])[1]`,
        LastRowHeader: `(//div[@class='sticky-columns']/descendant::div)[last()]/preceding-sibling::div[1]`,
        FirstColumnHeader: `((//div[@class='header-scrollable-container'])[1]/descendant::div)[1]`,
        LastColumnHeader: `((//div[@class='header-scrollable-container'])[1]/descendant::div)[last()]`,

        RowGrandTotalAtTop: `(//div[@role='rowgroup']//*[text()='All'])[1]/ancestor::div[@role='cell' and contains(@style,'left: 0px; top: 0px')]`,
        RowGrandTotalAtAnywhere: `(//div[@role='rowgroup']//*[text()='All'])[1]/ancestor::div[@role='cell' and contains(@style,'left: 0px;')]`,
    }


    async pageLoad() {
        await I.amOnPage(this.WebPage);
    }

    RowGrandTotalFunctions = {

        assertDefaultOptionRGT: async () => {

            await I.seeElement(this.TotalsIcon)
            await I.moveCursorTo(this.TotalsIcon)
            await I.click(this.TotalsIcon)

            await I.seeElement(this.TotalsModal)
            await I.moveCursorTo(this.TotalsModal)
            await I.wait(1)
            await I.seeElement(this.RowGrandTotalOptions.CheckedBtnDefaultRGT)

        },

        assertBottomRGT: async () => {
            await I.seeElement(this.TotalsIcon)
            await I.moveCursorTo(this.TotalsIcon)
            await I.click(this.TotalsIcon)

            await I.seeElement(this.TotalsModal)
            await I.moveCursorTo(this.TotalsModal)
            await I.wait(1)
            await I.seeElement(this.RowGrandTotalOptions.CheckedBtnDefaultRGT)

            await I.moveCursorTo(this.RowGroup)
            await I.seeElement(this.Conditions.RowGrandTotalAtTop)

            const elementLocator = locate(this.Conditions.RowGrandTotalAtAnywhere);
            console.log(elementLocator)

            const boxAtFirst = await I.grabElementBoundingRect(this.Conditions.FirstRowHeader);
            console.log(boxAtFirst)
            const topAtFirst = boxAtFirst ? boxAtFirst.y : null;
            console.log(topAtFirst)

            const boxBefore = await I.grabElementBoundingRect(elementLocator);
            console.log(boxBefore)
            const topBefore = boxBefore ? boxBefore.y : null;
            console.log(topBefore)



            await I.seeElement(this.RowGrandTotalOptions.RowGrandTotalBottomBtn)
            await I.wait(1)

            await I.click(this.RowGrandTotalOptions.RowGrandTotalBottomBtn)
            await I.wait(1)
            await I.seeCheckboxIsChecked(this.RowGrandTotalOptions.RowGrandTotalBottomBtn)
            await I.dontSeeCheckboxIsChecked(this.RowGrandTotalOptions.RowGrandTotalTopBtn)


            const boxAtLast = await I.grabElementBoundingRect(this.Conditions.LastRowHeader);
            console.log(boxAtLast)
            const topAtLast = boxAtLast ? boxAtLast.y : null;
            console.log(topAtLast)

            const boxAfter = await I.grabElementBoundingRect(elementLocator);
            console.log(boxAfter)
            const topAfter = boxAfter ? boxAfter.y : null;
            console.log(topAfter)

            let diffBtwTnL = topAtLast - topAtFirst
            console.log('\n' + diffBtwTnL)
            let diffInBoxes = topAfter - topBefore
            console.log(diffInBoxes)

            if (diffInBoxes === diffBtwTnL) {
                console.log('RGT has moved to bottom');
            } else {
                throw new Error(`RGT move difference (${diffInBoxes}) does not match expected difference (${diffBtwTnL})`);
            }
        },

        assertOffBtn: async () => {
            // Your assertOffBtn function code here
            await I.seeElement(this.TotalsIcon)
            await I.moveCursorTo(this.TotalsIcon)
            await I.click(this.TotalsIcon)

            await I.seeElement(this.TotalsModal)
            await I.moveCursorTo(this.TotalsModal)
            await I.wait(1)
            await I.seeElement(this.RowGrandTotalOptions.CheckedBtnDefaultRGT)

            await I.moveCursorTo(this.RowGroup)
            await I.seeElement(this.Conditions.RowGrandTotalAtTop)

            await I.seeElement(this.RowGrandTotalOptions.RowGrandTotalOffBtn)
            await I.wait(1)

            await I.click(this.RowGrandTotalOptions.RowGrandTotalOffBtn)
            await I.wait(1)
            await I.seeCheckboxIsChecked(this.RowGrandTotalOptions.RowGrandTotalOffBtn)
            await I.dontSeeCheckboxIsChecked(this.RowGrandTotalOptions.RowGrandTotalTopBtn)

            await I.dontSeeElement(this.Conditions.RowGrandTotalAtTop)
        }
    }

    ColumnGrandTotalFunctions = {
        assertDefaultOptionCGT: async () => {

            await I.seeElement(this.TotalsIcon)
            await I.moveCursorTo(this.TotalsIcon)
            await I.click(this.TotalsIcon)

            await I.seeElement(this.TotalsModal)
            await I.moveCursorTo(this.TotalsModal)
            await I.wait(1)
            await I.seeElement(this.ColumnGrandTotalOptions.CheckedBtnDefaultCGT)

        },

        assertLeftCGT: async () => {
            await I.seeElement(this.TotalsIcon)
            await I.moveCursorTo(this.TotalsIcon)
            await I.click(this.TotalsIcon)

            await I.seeElement(this.TotalsModal)
            await I.moveCursorTo(this.TotalsModal)
            await I.wait(1)
            await I.seeElement(this.ColumnGrandTotalOptions.CheckedBtnDefaultCGT)

            await I.moveCursorTo(this.ColumnGroup)
            await I.seeElement(this.Conditions.FirstColumnHeader);
            const headerTextThen = await I.grabTextFrom(this.Conditions.FirstColumnHeader);
            console.log(headerTextThen)


            await I.seeElement(this.ColumnGrandTotalOptions.ColumnGrandTotalLeft)
            await I.click(this.ColumnGrandTotalOptions.ColumnGrandTotalLeft)
            await I.wait(1)
            await I.seeCheckboxIsChecked(this.ColumnGrandTotalOptions.ColumnGrandTotalLeft)
            await I.dontSeeCheckboxIsChecked(this.ColumnGrandTotalOptions.CheckedBtnDefaultCGT)

            // await I.seeElement(this.ColumnGrandTotalOptions.DivCGT)

        },
    }
}

module.exports = new TotalsOption()