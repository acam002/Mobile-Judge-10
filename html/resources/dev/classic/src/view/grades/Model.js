Ext.define('MobileJudge.view.grades.Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grades',

    requires: [

    ],

    data: {
        studentFilter: [],
        judgeFilter: []
    },

    formulas: {
        studentFilterSelection: function(get) { return get('studentFilter'); },
        judgeFilterSelection: function(get) { return get('judgeFilter'); }
    },

    stores: {
        studentStates: {
            type: 'studentStates',
            storeId: 'studentStates',
            listeners: {
                load: 'onStatesLoaded'
            }
        },
        judgeStates: {
            type: 'judgeStates',
            storeId: 'judgeStates',
            listeners: {
                load: 'onStatesLoaded'
            }
        },
        students: {
            type: 'students',
            storeId: 'students'
        },
        judges: {
            type: 'judges',
            storeId: 'judges'
        },
        projects: {
            type: 'projects',
            storeId: 'projects'
        },
        locations: {
            type: 'locations',
            storeId: 'locations'
        }
    }
});
