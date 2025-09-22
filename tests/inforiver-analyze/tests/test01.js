const TotalsOption = require('../pages/TotalsOption');

Feature('Totals Option');

// describe('RGT Scenarios > Totals Options', () => {

//   Before(async () => {
//     await TotalsOption.pageLoad();
//   });

//   Scenario('Defaults + RGT at bottom', async () => {
//     await TotalsOption.RowGrandTotalFunctions.assertDefaultOptionRGT();
//     await TotalsOption.RowGrandTotalFunctions.assertBottomRGT();
//   });

//   Scenario('Defaults + RGT Off', async () => {
//     await TotalsOption.RowGrandTotalFunctions.assertDefaultOptionRGT();
//     await TotalsOption.RowGrandTotalFunctions.assertOffBtn();
//   });

// });

describe('CGT Scenarios > Totals Options', () => {

  Before(async () => {
    await TotalsOption.pageLoad();
  });

  Scenario('Defaults + CGT at left', async () => {
    await TotalsOption.ColumnGrandTotalFunctions.assertDefaultOptionCGT(); 
    await TotalsOption.ColumnGrandTotalFunctions.assertLeftCGT()
  });

});

