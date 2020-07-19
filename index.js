YUI().use(
    'aui-tree-view',
    function(Y) {
        var children = [{
            children: [{
                    label: 'Profile'
                },
                {
                    label: 'Experience'
                },
                {
                    label: 'Education'
                },
                {
                    label: 'Skills'
                },
                {
                    label: 'Achievments'
                },
                {
                    label: 'Projects'
                },
                {
                    label: 'Contact'
                }
            ],
            expanded: true,
            label: 'Jagapathi Gondi'
        }];

        new Y.TreeView({
            boundingBox: '#myTreeView',
            children: children
        }).render();
    }
);