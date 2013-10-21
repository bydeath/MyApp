Ext.define('MyApp.model.Comment', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'post_id', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'message', type: 'auto' }

        ]
        belongsTo:'Post'
    }
});
