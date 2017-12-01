Ext.define('MobileJudge.view.authentication.PasswordReset', {
    extend: 'MobileJudge.view.authentication.LockingWindow',
    xtype: 'passwordreset',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    //title: 'Reset Password',

    defaultFocus : 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            width: 455,
            defaultButton: 'resetPassword',
            autoComplete: true,
            bodyPadding: '20 20',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            defaults : {
                margin: '10 0'
            },

            cls: 'auth-dialog-login',
            items: [
                {
                    xtype: 'label',
                    cls: 'lock-screen-top-label',
                    text: 'Enter your email address for further reset instructions'
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    name: 'email',
                    bind: '{email}',
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: 'user@example.com',
                    vtype: 'email',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'button',
                    reference: 'resetPassword',
                    scale: 'large',
                    ui: 'soft-blue',
                    formBind: true,
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: 'Reset Password',
                    handler: 'onReset'
                },
                {
                    xtype: 'component',
                    html: '<div style="text-align:right">' +
                        '<a href="#login" class="link-forgot-password">'+
                            'Back to Log In</a>' +
                        '</div>'
                }
            ]
        }
    ]
});