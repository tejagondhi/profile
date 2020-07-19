YUI().use(
    'aui-tree-view',
    function(Y) {
      var children = [
        {
          children: [
            {
              label: 'File X'
            },
            {
              label: 'File Y'
            },
            {
              label: 'File Z'
            }
          ],
          expanded: true,
          label: 'Root'
        }
      ];
  
      new Y.TreeView(
        {
          boundingBox: '#myTreeView',
          children: children
        }
      ).render();
    }
  );