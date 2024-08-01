sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mng/emp/manageemployee/test/integration/FirstJourney',
		'com/mng/emp/manageemployee/test/integration/pages/EmployeeSetList',
		'com/mng/emp/manageemployee/test/integration/pages/EmployeeSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeSetList, EmployeeSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mng/emp/manageemployee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeSetList: EmployeeSetList,
					onTheEmployeeSetObjectPage: EmployeeSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);