Ext.define('MyApp.model.Post', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'user_id', type: 'auto' },
            { name: 'title', type: 'auto' },
            { name: 'body', type: 'auto' }
            proxy: {
                type: 'rest',
                url : 'data/posts',
                reader: {
                    type: 'json',
                    root: 'posts'
                }
            },

            belongsTo: 'User',
            hasMany: 'Comment'
        ]
    }
});
