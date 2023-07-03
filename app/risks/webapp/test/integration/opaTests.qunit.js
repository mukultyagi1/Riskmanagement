sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'risksmanagement/risks/test/integration/FirstJourney',
		'risksmanagement/risks/test/integration/pages/RisksList',
		'risksmanagement/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('risksmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);