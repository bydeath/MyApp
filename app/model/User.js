Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'name', type: 'auto' }

        ]
        proxy: {
            type: 'rest',
            url : 'data/posts',
            reader: {
                type: 'json',
                root: 'posts'
            }
        },
        belongsTo: 'User',
        hasMany: { model: 'Comment', name: 'comments' }
    }
});
