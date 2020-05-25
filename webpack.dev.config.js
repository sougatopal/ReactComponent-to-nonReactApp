module.exports = {
    entry:  './wrapper.js',
    output: {
        libraryTarget: 'var',
        library: 'dataTable',
        path:     'public',
        filename: 'data-table.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname,
            }
        ],
    },
  };